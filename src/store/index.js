import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
})


export const store = configureStore({reducer: rootReducer})