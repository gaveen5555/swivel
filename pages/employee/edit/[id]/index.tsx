import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../../../store/actions/employees";
import Link from "next/link";
import { useRouter } from "next/router";
import { getEmpoyeeData } from "../../../../store/selectors/employees";
import { EmployeeData } from "../../../../store/reducers/types";

export const EditEmployee: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const employeeData = useSelector(getEmpoyeeData).data;
  const [employeeEditData, setEmployeeEditData] = useState<EmployeeData>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const additionalData = {
      id: employeeEditData.id,
      photo: employeeEditData.photo,
    };
    // @ts-ignore
    dispatch(updateEmployee(data, additionalData));
  };
  const { id } = router.query;

  useEffect(() => {
    const userData = employeeData.find((item) => item.id === id);
    setEmployeeEditData(userData);
  }, [employeeData, id]);

  console.log("employeeEditData", employeeEditData);

  return (
    <div>
      <Head>
        <title>Swivel Practical Assignement</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            {...register("first_name", { required: true })}
            id="filled-basic"
            label={employeeEditData?.first_name}
            variant="filled"
          />
          {errors.first_name && <span>This field is required</span>}
        </div>
        <div>
          <TextField
            {...register("last_name", { required: true })}
            id="filled-basic"
            label={employeeEditData?.last_name}
            variant="filled"
          />
          {errors.last_name && <span>This field is required</span>}
        </div>
        <div>
          <TextField
            {...register("email", { required: true })}
            id="filled-basic"
            label={employeeEditData?.email}
            variant="filled"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <TextField
            {...register("number", { required: true })}
            id="filled-basic"
            label={employeeEditData?.number}
            variant="filled"
          />
          {errors.number && <span>This field is required</span>}
        </div>
        <div>
          <TextField
            {...register("gender", { required: true })}
            id="filled-basic"
            label={employeeEditData?.gender}
            variant="filled"
          />
          {errors.gender && <span>This field is required</span>}
        </div>

        <Button variant="contained" type="submit">
          Save
        </Button>
        <Link href="/employee/list">Home</Link>
      </form>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default EditEmployee;
