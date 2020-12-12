import React, { Component } from "react";

class Test extends Component {
    input = React.createRef();

    inputClick = () => {
        this.input.current.focus();
    };

    render() {
        return (
            <>
                <input ref={this.input} />
                <button onClick={this.inputClick}>Focus Input</button>

            </>
        );
    }
}

export default Test;


