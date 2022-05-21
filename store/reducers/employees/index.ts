import { EMPLOYEE_ACTIONS } from "../../actionTypes";
import { EmployeeData } from "../types";

export interface EmployeeState {
  data: EmployeeData[];
  isFetching: boolean;
  isDeleteSuccess: boolean;
  isDataAdded: boolean;
}

export const getInitialState = (): EmployeeState => {
  return {
    data: [],
    isFetching: false,
    isDeleteSuccess: false,
    isDataAdded: false,
  };
};

interface EmployeeFetching {
  type:
    | EMPLOYEE_ACTIONS.FETCH_EMPLOYEES
    | EMPLOYEE_ACTIONS.FETCH_EMPLOYEES_FAILED
    | EMPLOYEE_ACTIONS.FETCH_EMPLOYEES_SUCCESS;
  payload: any;
}
interface EmployeeAdd {
  type:
    | EMPLOYEE_ACTIONS.ADD_EMPLOYEE
    | EMPLOYEE_ACTIONS.ADD_EMPLOYEE_FAILED
    | EMPLOYEE_ACTIONS.RESET_ADD_DATA
    | EMPLOYEE_ACTIONS.ADD_EMPLOYEE_SUCCESS;
  payload: any;
}
interface EmployeeUpdate {
  type:
    | EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE
    | EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_FAILED
    | EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_SUCCESS;
  payload: any;
}
interface EmployeeDelete {
  type:
    | EMPLOYEE_ACTIONS.DELETE_EMPLOYEE
    | EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_FAILED
    | EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_SUCCESS;
  payload: any;
}

type EmployeeAction =
  | EmployeeFetching
  | EmployeeAdd
  | EmployeeUpdate
  | EmployeeDelete;

export const employees = (
  state = getInitialState(),
  action: EmployeeAction
): EmployeeState => {
  switch (action?.type) {
    case EMPLOYEE_ACTIONS.FETCH_EMPLOYEES:
      return {
        ...state,
        isFetching: true,
      };
    case EMPLOYEE_ACTIONS.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case EMPLOYEE_ACTIONS.ADD_EMPLOYEE:
      return {
        ...state,
        isDataAdded: false,
      };
    case EMPLOYEE_ACTIONS.ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isDataAdded: true,
      };
    case EMPLOYEE_ACTIONS.ADD_EMPLOYEE_FAILED:
      return {
        ...state,
        isDataAdded: false,
      };
    case EMPLOYEE_ACTIONS.UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case EMPLOYEE_ACTIONS.DELETE_EMPLOYEE:
      return {
        ...state,
        isDeleteSuccess: false,
      };
    case EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isDeleteSuccess: true,
      };
    case EMPLOYEE_ACTIONS.DELETE_EMPLOYEE_FAILED:
      return {
        ...state,
        isDeleteSuccess: false,
      };
    case EMPLOYEE_ACTIONS.RESET_ADD_DATA:
      return {
        ...state,
        isDataAdded: false,
      };

    default:
      return state;
  }
};

export default employees;
