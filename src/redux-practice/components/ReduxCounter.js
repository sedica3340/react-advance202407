import React from "react";
import styles from "./ReduxCounter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

const ReduxCounter = () => {
    // useSelector라는 훅을 이용해 store의 값을 꺼내온다는 사실 네놈을 이겨 눈물콧물 쏙다빼주마
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    const show = useSelector((state) => state.counter.showCounter);

    const increaseHandler = (e) => {
        // dispatch에는 인자로 어떤 변경을 할지 type과 벼경에 필요한 payload를 전송
        dispatch(counterActions.increment());
    };
    const decreaseHandler = (e) => {
        // dispatch에는 인자로 어떤 변경을 할지 type과 벼경에 필요한 payload를 전송
        dispatch(counterActions.decrement());
    };
    const multiplyHandler = (e) => {
        dispatch(counterActions.multi(2));
    };
    const toggleHandler = (e) => {
        dispatch(counterActions.toggle())
    };

    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={styles.value}>{counter}</div>}
            <div>
                <button onClick={increaseHandler}>Increment</button>
                <button onClick={decreaseHandler}>Decrement</button>
                <button onClick={multiplyHandler}>MULTI</button>
            </div>
            <button onClick={toggleHandler}>Toggle Counter</button>
        </main>
    );
};

export default ReduxCounter;
