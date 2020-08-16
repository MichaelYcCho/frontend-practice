import React from "react";
import PropTypes from "prop-types";

{/* .isRequired가 없으므로 옵션으로 인식 */ }
class Counter extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,

    }


    state = {

    }

    render() {
        return (
            <div onClick={this.props.onClick}>
                Counter
            </div>
        );
    }
}

export default Counter;