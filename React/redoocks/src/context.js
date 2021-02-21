import React, { useState, useContext } from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Michael",
        loggedIn: false
    });
    const logUserIn = () => setUser({ ...user, loggedIn: true });
    const logUserOut = () => setUser({ ...user, loggedIn: false })

    return (
        <UserContext.Provider value={{ user, fn: { logUserIn, logUserOut } }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const { user } = useContext(UserContext);
    return user;
}

export const useFns = () => {
    const { fn } = useContext(UserContext);
    return fn
}

export default UserContextProvider
