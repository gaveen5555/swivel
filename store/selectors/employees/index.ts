import { EmployeeState } from "../../reducers/employees";
import { AppState } from "../../reducers/rootReducer";

export const getEmpoyeeData = (state: AppState): EmployeeState =>
  state.employees;
