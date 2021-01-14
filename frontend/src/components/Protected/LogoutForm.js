import React from 'react'
import {useAuthDispatch, useAuthState} from '../context'
import {logoutUser} from '../actions'

export default function Logout(props){
    const dispatch = useAuthDispatch()
    const handleLogout = () =>{
        logoutUser(dispatch)
        props.history.push('/login')
    }

    return(
        <div className='logout-container'>
            <button className='logout' onClick={handleLogout}> Logout</button>
        </div>
    )
}