import React  from 'react';
import MousePosition from '../MousePosition';

const Test = () => {
    const { x, y } = MousePosition();
    
    return (
        <>
            <h3>MousePosition</h3>
            <ul>
                <li>Mouse X: {x} </li>
                <li>Mouse Y: {y} </li>
            </ul>
        </>
    )
}

export default Test;


