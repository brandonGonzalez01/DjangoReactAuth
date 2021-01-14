import React from 'react'
import axios from 'axios'

export async function loginUser(dispatch, loginPayload){
    dispatch({type:'LOGIN_REQUEST'})
    return await axios({
        method: 'post',
        url:'/api/login',
        headers:{'Content-Type': 'application/json'},
        data: JSON.stringify(loginPayload)
    })
    .then((response) => {
        const data = response.data
        if(data.user){
            localStorage.setItem('currentUser', JSON.stringify(data));
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:data
            })
            return data
        }
        else{
            dispatch({
                type:"LOGIN_ERROR",
                payload:data
            })
            return {user:null, token:null}
        }
    }).catch((error)=>{
        console.log(error)
        return {error}
    })
}

export async function logoutUser(dispatch){
    dispatch({type:'LOGOUT'})
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
}

