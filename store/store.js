import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

const bindMiddleware = (middleware) => {
  const appliedMiddleware = applyMiddleware(...middleware);
  let mw = appliedMiddleware;
  /* istanbul ignore else */

  const { composeWithDevTools } = require("redux-devtools-extension");

  mw = composeWithDevTools(appliedMiddleware);

  return mw;
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const initStore = () => {
  const store = createStore(
    persistedReducer,
    {},
    bindMiddleware([thunkMiddleware])
  );
  const persistor = persistStore(store);
  return { ...store, persistor };
};

export default createWrapper(initStore, { debug: false });
