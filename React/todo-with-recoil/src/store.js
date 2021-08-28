import { atom } from "recoil";


export const textState = atom({
    key: "textState", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
});

export const todoListState = atom({
    key: "todoListState",
    default: JSON.parse(window.localStorage.getItem('todoList')) || [],

});