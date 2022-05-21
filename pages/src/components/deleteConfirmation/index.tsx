import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../../../store/actions/employees";
import { EmployeeData } from "../../../../store/reducers/types";

interface props {
  openModal: boolean;
  onCloseDelete: () => void;
  selectedId: string;
  employeeData: EmployeeData[];
}

export const DeleteConfirmation: React.FC<props> = ({
  openModal,
  onCloseDelete,
  selectedId,
  employeeData,
}) => {
  const dispatch = useDispatch();

  const onEmployeeDelete = () => {
    // @ts-ignore
    dispatch(deleteEmployee(selectedId, employeeData));
  };
  return (
    <div>
      <Modal
        open={openModal}
        onClose={onCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            backgroundColor: "black",
            width: "40%",
            height: "40%",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this employee record?
          </Typography>
          <div>
            <Button onClick={onEmployeeDelete}>Yes</Button>
            <Button onClick={onCloseDelete}>No</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteConfirmation;
