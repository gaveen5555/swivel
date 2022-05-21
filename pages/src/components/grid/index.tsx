import { Grid } from "@material-ui/core";
import React from "react";
import { EmployeeData } from "../../../../store/reducers/types";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import EmployeeInfo from "../employeeInfo";

interface props {
  data: EmployeeData[];
  deleteEmployee: (id) => void;
}

export const GridLayout: React.FC<props> = ({ data, deleteEmployee }) => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {data?.map((item, key) => {
          return (
            <Grid key={key} item xs={2} style={{ margin: 10 }}>
              <div>
                <EmployeeInfo info={item} />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link href={`edit/${item.id}`}>
                    <EditIcon style={{ cursor: "pointer" }} />
                  </Link>
                  <DeleteIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteEmployee(item.id)}
                  />
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default GridLayout;
