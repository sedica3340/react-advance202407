import { createStore } from "redux";

export const INC = "INC";
export const DEC = "DEC";
export const MULTI = "MULTI";
export const TOGGLE = "TOGGLE";

// 관리할 초기 상태값 객체
const initialCountState = {
    counter: 0,
    showCounter: true,
};

/**
 * param1 (state): 상태 변경 이전의 상태
 * param2 (action): 상태를 어떻게 변경할지에 대한 명세
 * return : 변경된 새로운 상태
 */
const counterReducer = (state = initialCountState, action) => {
    console.log("state: ", state);
    console.log("action: ", action);

    switch (action.type) {
        case INC:
            return { ...state, counter: state.counter + 1 };
        case DEC:
            return { ...state, counter: state.counter - 1 };
        case MULTI:
            return { ...state, counter: state.counter * action.payload };
        case TOGGLE:
            return { ...state, showCounter: !state.showCounter };
        default:
            return state;
    }
};

const store = createStore(counterReducer);

export default store;
