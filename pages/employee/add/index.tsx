import React from "react";
import { useForm } from "react-hook-form";
import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  resetAddEmployee,
} from "../../../store/actions/employees";
import Link from "next/link";
import { AddEditEmployee } from "../../src/components/addEditEmployee";
import { getEmpoyeeData } from "../../../store/selectors/employees";

export const AddEmployee: React.FC = () => {
  const isDataAdded = useSelector(getEmpoyeeData)?.isDataAdded;
  const employeeCount = useSelector(getEmpoyeeData)?.data.length;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const id = employeeCount + 1;
    // @ts-ignore
    dispatch(addEmployee(data, id));
  };
  const onPressHome = () => {
    // @ts-ignore
    dispatch(resetAddEmployee());
  };
  return (
    <div
      style={{
        display: "flex",
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddEditEmployee register={register} errors={errors} />
        <div
          style={{
            marginTop: 80,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button variant="contained" type="submit">
            Add
          </Button>
          <Link href="list" onClick={onPressHome}>
            <Button variant="contained" type="submit">
              Home
            </Button>
          </Link>
        </div>
        {isDataAdded && <p>Data added successfully</p>}
      </form>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default AddEmployee;
