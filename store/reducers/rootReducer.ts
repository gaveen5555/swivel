import { combineReducers } from 'redux';
import employees from './employees';

const rootReducer = combineReducers({
  employees
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
