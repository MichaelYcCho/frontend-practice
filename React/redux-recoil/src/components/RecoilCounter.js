import React from 'react';
import { useRecoilState } from 'recoil';
import countState from 'recoilstate/CounterRecoil';


export default function Counter() {
    const [count, setCount] = useRecoilState(countState);

    return (
        <div className="counter">
            Count: {count}
            <br />
            <button onClick={() => setCount(count - 1)}>1 감소</button>
            <button onClick={() => setCount(count + 1)}>1 증가</button>
        </div>
    );
}
