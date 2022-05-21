import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { EmployeeData } from "../../../../store/reducers/types";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

interface props {
  data: EmployeeData[];
  deleteEmployee: (id) => void;
}

const getGender = (gender: string) => {
  switch (gender) {
    case "M":
      return "Male";

    case "F":
      return "Female";
  }
};

const createData = (
  image: string,
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  gender: string,
  id: string,
  actions: any
) => {
  return { image, first_name, last_name, email, phone, gender, id, actions };
};

export const TableLayout: React.FC<props> = ({ data, deleteEmployee }) => {
  const rows = () => {
    return data.map((item) => {
      return createData(
        item.photo,
        item.first_name,
        item.last_name,
        item.email,
        item.number,
        item.gender,
        item.id,
        null
      );
    });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bolder" }}>Image</TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                First Name
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Last Name
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Email
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Phone
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Gender
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                id
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows().map((row) => (
              <TableRow key={"sdf"}>
                <TableCell component="th" scope="row">
                  {/* <img src={row.image} alt="profile_picture"/> */}
                  <Image
                    loader={() => row.image}
                    src={row.image}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                    alt="profile_picture"
                  />
                </TableCell>
                <TableCell align="center">{row.first_name}</TableCell>
                <TableCell align="center">{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{getGender(row.gender)}</TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Link href={`edit/${row.id}`}>
                      <EditIcon style={{ cursor: "pointer" }} />
                    </Link>
                    <DeleteIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteEmployee(row.id)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableLayout;
