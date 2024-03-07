import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import loginReducer from "./login.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    login: loginReducer,
});

export default rootReducer;