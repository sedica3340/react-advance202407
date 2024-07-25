import React, { useState, memo, useCallback, useEffect } from 'react';
import CounterHistory from './CounterHistory';
import IconButton from '../UI/IconButton';
import MinusIcon from '../UI/Icons/MinusIcon';
import PlusIcon from '../UI/Icons/PlusIcon';
import CounterOutput from './CounterOutput';
import { log } from '../../log';

const isPrime = number => {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const Counter = ({ initialCount }) => {
  log('<Counter /> rendered', 1);
  const initialCountIsPrime = isPrime(initialCount);

  // const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([initialCount]);

  // useEffect(() => {
  //   setCounterChanges([initialCount])
  // }, [initialCount]);
  const currentCount = counterChanges.reduce((acc, cur) => acc + cur, 0);

  // useCallback hooks는 변경사항이 없는 함수를 재생성하지 않고
  // 재사용하는 리액트의훅입니다.
  // 2번째 파라미터 배열은 의존성 배열로 안에 있는 값이 변경되면 함수를 재생성합니다.

  const decrementHandler = useCallback(() => {
    // setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges(prev => [-1, ...prev]);
  }, []);

  const incrementHandler = useCallback(() => {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges(prev => [1, ...prev]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={decrementHandler}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCount} />
        <IconButton icon={PlusIcon} onClick={incrementHandler}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
};
export default Counter;
