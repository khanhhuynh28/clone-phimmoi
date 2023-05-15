import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/auth.slice";

const rootReducer = {
    auth: authReducer
}
export const store = configureStore({
    reducer: rootReducer
})