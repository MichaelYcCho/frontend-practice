import React from 'react'
import Counter from 'components/ReduxCounter';
//import './styles.css';

export default function ReduxPage() {
    return (
        <div className="App">
            <h1>Recoil 카운터</h1>
            <p>아래 버튼을 클릭해보세요.</p>

            <Counter />

        </div>
    )
}
