import React from 'react';



const Test = ({ food }) => {
    return <div> 제가 좋아하는 음식은 {food} 입니다. </div>
}

Test.defaultProps = {
    food: '비빔밥'
}

export default Test;

