import React, {useState } from "react";
import axios from 'axios';
import {AuthProvider} from './context'
import LoginForm from './Protected/LoginForm'
import Home from './Home'
import Cookies from 'js-cookie'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import ProtectedRoute from './Protected/ProtectedRoute';

const csrftoken = Cookies.get('csrftoken');
axios.defaults.headers.post['X-CSRFToken'] = csrftoken

export default function App() {

    return (
        <AuthProvider>
            <Router>
                <Switch>
                   <ProtectedRoute
                        component={LoginForm}
                        path={'/Login'}
                   />
                   <ProtectedRoute
                        exact
                        path={'/'}
                        component={Home}
                   />
                   {/* Example of a protected route that needs the user to be logged in.
                   <ProtectedRoute
                        isPrivate={true}
                        component={SomeComponent}
                        path={'/somePath'}
                   />*/
                   }
                </Switch>
            </Router>
        </AuthProvider>
    )
}


