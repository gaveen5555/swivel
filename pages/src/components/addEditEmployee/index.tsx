import { MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import {
  emailValidator,
  errorNameHandler,
  lkPhoneNumberValidator,
} from "../../../helpers/errorHandler";

interface props {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

export const AddEditEmployee: React.FC<props> = ({ register, errors }) => {
  return (
    <div>
      <div>
        <TextField
          {...register("first_name", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            maxLength: 10,
            minLength: 6,
          })}
          id="filled-basic"
          label="First name"
          variant="filled"
          margin="dense"
        />
        {errorNameHandler(errors.first_name)}
      </div>
      <div>
        <TextField
          {...register("last_name", { required: true })}
          id="filled-basic"
          label="Last name"
          variant="filled"
          margin="dense"
        />
        {errorNameHandler(errors.last_name)}
      </div>
      <div>
        <TextField
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          id="filled-basic"
          label="email"
          variant="filled"
          margin="dense"
        />
        {emailValidator(errors.email)}
      </div>
      <div>
        <TextField
          {...register("number", {
            required: true,
            pattern:
              /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/,
          })}
          id="filled-basic"
          label="phone"
          variant="filled"
          margin="dense"
        />
        {lkPhoneNumberValidator(errors.number)}
      </div>
      <div>
        <Select
          {...register("gender", { required: true })}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          style={{width:'100%'}}
        >
          <MenuItem value={"M"}>Male</MenuItem>
          <MenuItem value={"F"}>Female</MenuItem>
        </Select>
        {errorNameHandler(errors.gender)}
      </div>
    </div>
  );
};
