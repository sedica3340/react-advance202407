import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// 관리할 초기 상태값 객체


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});



export default store;
