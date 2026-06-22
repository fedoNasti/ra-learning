import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/actions'; // импортируем тип

function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Счётчик: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default Counter;