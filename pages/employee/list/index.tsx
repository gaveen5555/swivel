import React, { useEffect, useState } from "react";
import Head from "next/head";
import GridLayout from "../../src/components/grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../../store/actions/employees";
import { getEmpoyeeData } from "../../../store/selectors/employees";
import TableLayout from "../../src/components/table";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import GridViewIcon from "@mui/icons-material/GridView";
import TableViewIcon from "@mui/icons-material/TableView";
import Link from "next/link";
import DeleteConfirmation from "../../src/components/deleteConfirmation";
import PageLayout from "../../pageLayout";
import { Button } from "@material-ui/core";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const employeeData = useSelector(getEmpoyeeData).data;
  const isDeleteSuccess = useSelector(getEmpoyeeData).isDeleteSuccess;
  const [activeLayout, setActiveLayout] = useState("grid");
  const [selectedId, setSelectedId] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);

  useEffect(() => {
    if (!employeeData.length) {
      // @ts-ignore
      dispatch(fetchEmployees());
    }
    setData(employeeData);
  }, [dispatch, employeeData]);

  useEffect(() => {
    if (isDeleteSuccess) {
      setDeleteConfirmation(false);
    }
  }, [isDeleteSuccess]);

  const deleteEmployee = (id) => {
    setSelectedId(id);
    setDeleteConfirmation(true);
  };
  const onCloseDelete = () => {
    setDeleteConfirmation(false);
  };

  return (
    <PageLayout>
      {deleteConfirmation && (
        <DeleteConfirmation
          openModal={deleteConfirmation}
          onCloseDelete={onCloseDelete}
          selectedId={selectedId}
          employeeData={data}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 20,
          margin: 20,
          marginRight: 40,
        }}
      >
        <Link href="add">
          <Button
            variant="contained"
            style={{
              borderRadius: 14,
              backgroundColor: "darkslateblue",
              color: "white",
            }}
          >
            Add employee
          </Button>
        </Link>
        <div>
          {activeLayout === "grid" ? (
            <GridViewIcon
              style={{ cursor: "pointer" }}
              onClick={() => setActiveLayout("table")}
            />
          ) : (
            <TableViewIcon
              style={{ cursor: "pointer" }}
              onClick={() => setActiveLayout("grid")}
            />
          )}
        </div>
      </div>

      <div>
        {activeLayout === "grid" ? (
          <GridLayout data={data} deleteEmployee={(id) => deleteEmployee(id)} />
        ) : (
          <TableLayout data={data} deleteEmployee={(id) => deleteEmployee(id)}/>
        )}
      </div>
    </PageLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Home;
