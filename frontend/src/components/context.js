import React, { useReducer } from 'react'
import {AuthReducer, initialState} from './Protected/AuthReducer'

const AuthStateContext = React.createContext()
const AuthDispatchContext = React.createContext()


export function useAuthState(){
    const context = React.useContext(AuthStateContext)
    if(context === undefined){
        throw new Error("UseAuthState must be within a AuthProvider")
    }
    return context
}

export function useAuthDispatch(){
    const context = React.useContext(AuthDispatchContext)
    if(context === undefined){
        throw new Error("UseAuthDispatch must be within a AuthProvider")
    }
    return context
}

export const AuthProvider = ({children}) =>{
    const [user, dispatch] = useReducer(AuthReducer, initialState)

    return(
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}

