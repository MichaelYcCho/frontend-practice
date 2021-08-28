import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { textState, todoListState } from "../store";

function AddTodo({ }) {

    const [text, setText] = useRecoilState(textState);
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }
        setTodoList((oldTodoList) => {
            const newTodoList = [
                ...oldTodoList,
                {
                    text,
                    isComplete: false,
                },
            ];
            window.localStorage.setItem('todoList', JSON.stringify(newTodoList));
            return newTodoList;
        });
        setText("");
    };
    const onChange = (event) => {
        setText(event.target.value);
    };
    return (
        <form className="pb4 ph2">
            <input type="text" value={text} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </form>
    );
}

export default AddTodo;