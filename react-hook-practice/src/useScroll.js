import React, { useState, useEffect } from 'react';
import './App.css';

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onSCroll = () => {
        setState({ y: window.scrollY, x: window.scrollX })
    }
    useEffect(() => {
        window.addEventListener("scroll", onSCroll);
        return () => window.removeEventListener('scroll', onSCroll);
    }, []);

    return state;
};

const App = () => {
    const { y } = useScroll();
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
        </div>
    );
}

export default App;
