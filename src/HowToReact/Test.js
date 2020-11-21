import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';




class Test extends Component {
    state = {
        number: 0
    }

    add = () => {
        this.setState({ number: this.state.number + 1 })
    }

    minus = () => {
        this.setState({ number: this.state.number - 1 })
    }

    render() {
        const { number } = this.state;

        return (
            <div>
                <h2> number is : {number}</h2>
                <button onClick={this.add}> Add   </button>
                <button onClick={this.minus}> Minus </button>
            </div>
        )

    }
}



export default Test;





/*
Test.defaultProps = {
    food: '비빔밥',
    name: "김민수"
}

Test.propTypes = {
    food: PropTypes.string,
    name: PropTypes.string.isRequired
}
*/