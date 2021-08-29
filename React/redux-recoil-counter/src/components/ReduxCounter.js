import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'actions/ReduxActions';



export default function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            Count: {counter.count}
            <br />
            <button onClick={() => dispatch(update(-1))}>1 감소</button>
            <button onClick={() => dispatch(update(1))}>1 증가</button>
        </div>
    );
}
