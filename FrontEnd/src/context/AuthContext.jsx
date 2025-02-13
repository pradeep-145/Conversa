import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    return context;
};

export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null);
    return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>;
};