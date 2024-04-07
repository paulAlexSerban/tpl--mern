import classes from './Counter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { increment, decrement, increase, decrease, toggle } from '../store/counterSlice';
const Counter = () => {
    // Using the useSelector hook from 'react-redux' to select the 'counter' state from the Redux store.
    // useSelector returns status from the Redux store.
    const { counter, showCounter } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
    // this is not best practice
    // this is only for demonstration purposes of handle multiple states in redux
    const toggleCounterHandler = () => {
        dispatch(toggle());
    };

    const incrementHandler = () => {
        dispatch(increment());
    };
    const decrementHandler = () => {
        dispatch(decrement());
    };

    const increaseHandler = (value: number) => {
        dispatch(increase(value));
    };
    const decreaseHandler = (value: number) => {
        dispatch(decrease(value));
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={() => incrementHandler()}>Increment +</button>
                <button onClick={() => decrementHandler()}>Decrement -</button>
                <button onClick={() => increaseHandler(5)}>Increase by 5</button>
                <button onClick={() => decreaseHandler(5)}>Decrease by 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
