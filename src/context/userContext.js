import React from 'react';

const intialState = {
    firstName : 'emma',
    lastName : 'watson',
    email:'emma@gmail.com',
}

export const UserContext = React.createContext();

export const UserContextProvider = ({children}) => {
    return (<UserContext.Provider value={intialState} >
    {children}
    </UserContext.Provider>
    );
};