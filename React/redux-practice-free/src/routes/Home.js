import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDO from "../components/ToDo";

function Home({ toDos, addToDo }) {
    //console.log(toDos);
    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
        <>
            <h1> To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
                <ul>
                    {toDos.map(toDo => (
                        <ToDO {...toDo} key={toDo.id} />
                    ))}
                </ul>
            </form>
        </>
    );
}

function mapStateToProps(state) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToDo: text => dispatch(add(text))
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

