import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../store";

function Todos() {

    const todoList = useRecoilValue(todoListState);

    const setTodoList = useSetRecoilState(todoListState);
    const deleteTodo = (index) => {
        setTodoList((oldTodoList) => {
            const newTodoList = oldTodoList.filter(function (el, i) {
                return index !== i;
            });
            window.localStorage.setItem('todoList', JSON.stringify(newTodoList));
            return newTodoList;
        });
    };
    const toggleTodo = (index) => {
        setTodoList((oldTodoList) => {
            const newTodoList = oldTodoList.map((todo, i) => {
                if (index === i) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete,
                    };
                } else {
                    return todo;
                }
            });
            window.localStorage.setItem('todoList', JSON.stringify(newTodoList));
            return newTodoList;
        });
    };
    return (
        <ul className="ph4 tl">
            {todoList.map((todo, index) => (
                <li className="pb3" key={index + 100}>
                    <input
                        type="checkbox"
                        id="todo"
                        name="todo"
                        checked={todo.isComplete}
                        onChange={() => {
                            toggleTodo(index);
                        }}
                    />
                    <label htmlFor="todo" data-content={todo.text}>
                        {todo.text}
                    </label>
                    <button onClick={() => deleteTodo(index)}>x</button>
                </li>
            ))}
        </ul>
    );
}

export default Todos;