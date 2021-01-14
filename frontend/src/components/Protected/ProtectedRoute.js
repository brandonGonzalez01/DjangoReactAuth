import React from 'react';
import {useAuthState} from '../context'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";

export default function ProtectedRoute({component:Component, path, isPrivate,...rest}){
    const userDetails = useAuthState()
    const isProtected = __NoAuth__ ? false : isPrivate 
    return(
        <Route
            path={path}
            render={props => isProtected && !userDetails.token ? (
                <Redirect
                    to={"/login"}
                    from={path}
                />
            ):(
                <Component {... props}/>
            )
        }
        {...rest}
        />
    )
}