import React from 'react';
import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { countState, textState, countInputState } from 'recoilstore/CounterRecoil';


export default function Counter() {
    const [count, setCount] = useRecoilState(countState); // useRecoilState 을 통한 value, setter 
    const setCountUseSetRecoilState = useSetRecoilState(countState); // setter만 사용하는 경우
    const resetCount = useResetRecoilState(countState);
    const [text, setText] = useRecoilState(textState);
    const [countInput, setCountInput] = useRecoilState(countInputState);

    return (
        <div className="counter tc">
            <h1>Recoil 카운터</h1>
            Count: {count}
            <p>selector {countInput}</p>
            <br />
            <input value={text} onChange={(e) => setText(e.target.value)} /> <br /><br />
            <button onClick={() => setCount(count - 1)}>1 감소</button>
            <button onClick={() => setCount(count + 1)}>1 증가</button>
            <button onClick={() => setCountUseSetRecoilState(count - 1)}>1 감소 (useSetRecoilState)</button>
            <button onClick={() => setCountUseSetRecoilState(count + 1)}>1 증가 (useSetRecoilState)</button>
            <button onClick={resetCount}>카운트 리셋</button>
            <button onClick={() => setCountInput('100')}>selector 값 100로 변경</button>
        </div >
    );
}
