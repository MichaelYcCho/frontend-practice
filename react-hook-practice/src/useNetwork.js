import React, { useState, useEffect } from 'react';
import './App.css';

const useNetwork = onchange => {
    const [status, setStatus] = useState(navigator.onLine);  //T or F 반환
    const handleChange = () => {
        if (typeof onchange == "function") {
            onchange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);

        };
    }, [])

    return status;
}

const App = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are Offline");
    }
    const onLine = useNetwork(handleNetworkChange);
    return (
        <div className="App">
            <h1>{onLine ? "Online" : "Offline"}</h1>

        </div>
    );
}

export default App;
