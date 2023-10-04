import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import taskReducer from "./slices/taskSlice";
import { logout } from "./slices/authSlice";

const appReducer = combineReducers({
  auth: authReducer,
  task: taskReducer,
});

const rootReducer = (state, action) => {
  if (action.type === logout.type) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
