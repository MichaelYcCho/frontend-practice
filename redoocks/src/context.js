import React, { useState, useContext } from "react";

export const UserContext = React.createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Youngchan",
        loggedIn: false
    });
    const logUserIn = () => setUser({ ...user, loggedIn: true })
    return (
        <UserContext.Provider value={{ user, fn: { logUserIn } }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const { user } = useContext(UserContext);
    return user;
}

export const useFns = () => {
    const { fn } = useContext(UserContext)
}

export default UserContextProvider;