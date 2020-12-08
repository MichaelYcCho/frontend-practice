import React, { useEffect } from 'react';
import './App.css';

const useBeforeLeave = onBefore => {
    const handle = event => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
}

const App = () => {
    const begForLife = () => console.log("Pls don't leave ");
    useBeforeLeave(begForLife);
    return (
        <div className="App">
            <div> Hello</div>
        </div>
    );
}

export default App;
