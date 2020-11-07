import React, { useState, useReducer } from 'react';

const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';

const reducer = (prevState, action) => {
    const { type, value } = action;
    if (type === SET_NAME) {
        return { ...prevState, myname: value };
    } else if (type === SET_AGE) {
        return { ...prevState, age: value };
    }
    return prevState;
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, { myname: '', age: '' });
    const { myname, age } = state;
    const onChange = (e) => {
        //name 이지만 참조는 type // name = type
        const { name: type, value } = e.target;
        dispatch({ type, value });
    };
    /* const [person, setPerson] = useState({ myName: '', age: '' })
    const { myName, age } = person;
    const onChange = (e) => {
        //여기서 name은 html의 name=""
        const { name, value } = e.target;
        setPerson((prevState) => ({
            ...prevState,
            [name]: value,
        })); */


    return (
        <div>
            myname:{myname}, age:{age}
            <input type="text" name="SET_NAME" placeholder="name" onChange={onChange} />
            <input type="text" name="SET_AGE" placeholder="age" onChange={onChange} />
        </div>
    );
};

export default App;