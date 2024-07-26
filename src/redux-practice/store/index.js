import { configureStore, createSlice } from "@reduxjs/toolkit";

// 관리할 초기 상태값 객체
const initialCountState = {
    counter: 0,
    showCounter: true,
};

// reducer를 slice로 변경
/**
 * option객체에 들어가 있는 프로퍼티 설명
 * prop1: name - 컴포넌트가 해당 리듀서를 사용할 때 부르는 이름
 * prop2: initialState - 관리할 상태값들의 초기값
 * prop3: reducers - 기존 리듀서에서 사용하던 내용들 (실제 액션)
 */
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCountState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        multi(state, action) {
            state.counter = state.counter * action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const initialAuthState = {
    isLoggedIn: false,
};
const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
