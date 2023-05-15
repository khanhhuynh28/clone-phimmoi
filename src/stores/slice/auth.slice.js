import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "../action/auth.action";
import { message } from "antd";

const authInitialState = {
    user: null,
    loadingLogin: false,
    loadingRegister: false,
    isLogin: false,
    isRegistered: false,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.loadingLogin = true;

        });
        builder.addCase(registerAction.pending, (state) => {
            state.loadingRegister = true;
        });

        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loadingLogin = false;
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isLogin = true;
        });
        builder.addCase(registerAction.fulfilled, (state) => {
            state.loadingRegister = false;
            state.isRegistered = true;
            message
                .open({
                    type: 'loading',
                    content: 'Đang tải',
                    duration: 0.3,
                })
                .then(() => message.success('Đăng ký thành công', 0.5))
                .then(() => message.success('Hãy đăng nhập', 1))
        });

        builder.addCase(loginAction.rejected, (state) => {
            state.loadingLogin = false;
            message
                .open({
                    type: 'loading',
                    content: 'Đang tải',
                    duration: 0.3,
                })
                .then(() => message.error('Đăng nhập thất bại', 1.5))
        });
        builder.addCase(registerAction.rejected, (state) => {
            state.loadingRegister = false;
            message
                .open({
                    type: 'loading',
                    content: 'Đang tải',
                    duration: 0.3,
                })
                .then(() => message.error('Đăng ký thất bại', 1.5))
        });
    },

});
export const authReducer = authSlice.reducer;
