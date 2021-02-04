import React, { useRef } from 'react';
import { elementType } from "prop-types";
import './App.css';


export const useFullscreen = callback => {
    const element = useRef();
    const runCb = isFull => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        runCb(false);
    };
    return { element, triggerFull, exitFull };
};

const App = () => {
    const onFulls = (isFull) => {
        console.log(isFull ? "Full" : "No");
    }
    const { element, triggerFull, exitFull } = useFullscreen();
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <div ref={element}>
                <img src="https://postfiles.pstatic.net/MjAyMDA4MTZfMjY3/MDAxNTk3NTEyODcxNTg1.16THh2BJ5ownqfnXDeRTythFtMqd728HVjdi5F9pJ8og.1n5ctJsR3KSZpVrgN_r_vfRbeoYrIdknRr5mWFg8RF4g.PNG.michael_cho77/django.png?type=w773" />
                <button onClick={exitFull}>Exit FullScrenn</button>
            </div>
            <button onClick={triggerFull}>Make FullScrenn</button>

        </div>
    );
}

export default App;

