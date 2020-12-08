import React from 'react';
import './App.css';

const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
};

const App = () => {
    const triggerNotif = useNotification("Notification Success");
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <button onClick={triggerNotif}>See Notification</button>
            <h1>Hello</h1>
        </div>
    );
}

export default App;
