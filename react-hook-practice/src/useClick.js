import React, { useRef, useEffect } from 'react';
import './App.css';

const useClick = (onclick) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onclick);
        }
        if (element.current) {
            return () => element.current.removeEventListener("click", onclick);
        }
    }, []);
    return element;

}

const App = () => {
    const sayHello = () => console.log("Hello");
    const title = useClick(sayHello);
    return (
        <div className="App">
            <h1 ref={title}>Hi</h1>
        </div>
    );
}

export default App;

