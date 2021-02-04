import React, { useState } from 'react';
import './App.css';

export const useInput = (initialValue, validator) => {
    console.log(`${validator} is `, typeof (validator));
    const [value, setValue] = useState(initialValue);
    const onChange = event => {

        const {
            target: { value }
        } = event;
        // const value = event.target.value


        let willUpdate = true;
        if (typeof validator === "function") {
            //console.log(validator(value));
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };

};


function App() {
    //const maxLen = (value) => value.length <= 10;
    // 10 이 넘어가면 wullUpdate가 false

    const maxLen = (value) => !value.includes("@");
    // @를 입력한 순간 false

    const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
        </div>
    );
}

export default App;
