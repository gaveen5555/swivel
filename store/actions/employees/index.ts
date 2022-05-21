import axios from "axios";
import { EMPLOYEE_ACTIONS } from "../../actionTypes";
import { getDefaultDP } from "../../../pages/src/constants/constants";
import { EmployeeData } from "../../reducers/types";

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch({ type: EMPLOYEE_ACTIONS.FETCH_EMPLOYEES });
    axios
      .get("http://localhost:3000/api/employees")
      .then((response) => {
        //   console.log("AAA",response);
        const employees = response.data;
        dispatch({
          type: EMPLOYEE_ACTIONS.FETCH_EMPLOYEES_SUCCESS,
          payload: employees,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: EMPLOYEE_ACTIONS.FETCH_EMPLOYEES_FAILED,
          payload: errorMsg,
        });
      });
  };
};
export const addEmployee = (data: EmployeeData, id: string) => {
  //TO-DO : Add type for data
  const { first_name, last_name, email, gender, number } = data;
  return (dispatch) => {
    dispatch({ type: EMPLOYEE_ACTIONS.ADD_EMPLOYEE });
    axios
      .post("http://localhost:3000/api/employees", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        number: number,
        gender: gender,
        id: id,
        photo: getDefaultDP(),
      })
      .then((response) => {
        const newEmployeeList = response.data;
        dispatch({
          type: EMPLOYEE_ACTIONS.ADD_EMPLOYEE_SUCCESS,
          payload: newEmployeeList,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: EMPLOYEE_ACTIONS.ADD_EMPLOYEE_FAILED,
          payload: errorMsg,
        });
      });
  };
};

interface AdditionalData {
  id: string;
  photo: string;
}
export const updateEmployee = (
  data: EmployeeData,
  additionalData: AdditionalData
) => {
  const { first_name, last_name, email, gender, number } = data;
  return (dispatch) => {
    dispatch({ type: EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE });
    axios
      .put("http://localhost:3000/api/employees", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        number: number,
        gender: gender,
        id: additionalData.id,
        photo: additionalData.photo,
      })
      .then((response) => {
        console.log("response", response);
        const newEmployeeList = response.data;
        dispatch({
          type: EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_SUCCESS,
          payload: newEmployeeList,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_FAILED,
          payload: errorMsg,
        });
      });
  };
};
export const deleteEmployee = (id: string, employeeData: EmployeeData[]) => {
  return (dispatch) => {
    dispatch({ type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE });
    axios
      .delete("http://localhost:3000/api/employees", {
        data: { id, employeeData },
      })
      .then((response) => {
        const newEmployeeList = response.data;
        dispatch({
          type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_SUCCESS,
          payload: newEmployeeList,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_FAILED,
          payload: errorMsg,
        });
      });
  };
};
export const resetAddEmployee = () => {
  return (dispatch) => {
    dispatch({ type: EMPLOYEE_ACTIONS.RESET_ADD_DATA });
  };
};
