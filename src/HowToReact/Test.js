import React from 'react';
import PropTypes from 'prop-types';



const Test = ({ name, food }) => {
    return <div> 저는 {name} 입니다. <br />
     제가 좋아하는 음식은 {food} 입니다. </div>
}

Test.defaultProps = {
    food: '비빔밥',
    name: "김민수"
}

Test.propTypes = {
    food: PropTypes.string,
    name: PropTypes.string.isRequired
}

export default Test;

