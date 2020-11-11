import React, { useContext} from 'react'
export const LoginContext = React.createContext(false);
export const AccountContext = React.createContext();



export function useLoginContext(){   
    return useContext(LoginContext);
}

export function useAccountContext(){
    return useContext(AccountContext);
}




