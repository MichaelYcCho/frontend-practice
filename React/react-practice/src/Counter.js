import React from "react";
import PropTypes from "prop-types";

{/* .isRequired가 없으므로 옵션으로 인식 */ }
class Counter extends React.Component {
    static defaultProps = {
        color: 'red',
    }

    static propTypes = {
        color: PropTypes.string,
    }

    state = {
        color: this.props.color,
        value: 0,
    }
    onClick = () => {
        //this.setState({ value: this.state.value + 1 });
        this.setState(({ value: preValue }) => ({
            value: preValue + 1
        }))
    }

    onContextMenu = (e) => {
        e.preventDefault();
        this.setState(({ value: preValue }) => ({
            value: (preValue >= 1 ? preValue - 1 : 0)
        }))
    }

    render() {
        const { color, value } = this.state;
        return (
            <div onClick={this.onClick}
                onContextMenu={this.onContextMenu}
                style={{ ...style, backgroundColor: color }}>
                {value}
            </div>
        );
    }
}

const style = {
    width: '100px',
    height: '100px',
    display: 'inline-block',
    borderRadius: '50px',
    textAlign: 'center',
    lineHeight: '100px',
    userSelect: 'none',
    margin: '1rem',
}

export default Counter;