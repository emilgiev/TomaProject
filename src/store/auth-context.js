import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }

})

export function AuthContextProvider(props) {

    const [token, setToken] = useState(null)
    const userIsLoggedIn = !!token;

    function loginHander(token) {
        setToken(token)
    }

    function logoutHandler() {
        setToken(null)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHander,
        logout: logoutHandler
    }

    return (
        < AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;