import React from "react";
import { useFns } from "./context";
import Header from "./Header";


const Screen = () => {
    const { logUserIn, logUserOut } = useFns();
    return (
        <div>
            <Header />
            <h1> Screen </h1>
            <button onClick={logUserIn}>Log user In</button>
            <button onClick={logUserOut}>Log user Out</button>
        </div>
    );
};
export default Screen;