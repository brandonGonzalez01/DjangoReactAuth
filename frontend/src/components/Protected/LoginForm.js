import React, {useState} from 'react'
import { loginUser } from './AuthActions'
import {useHistory} from 'react-router-dom'
import { useAuthDispatch, useAuthState } from '../context'

export default function LoginForm(props){
    let history = useHistory();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useAuthDispatch()
    const {loading, errorMessage} = useAuthState()

    const handleLogin = async (e) => {
        e.preventDefault()
        const payload = {username, password}
        try{
            const response = await loginUser(dispatch,payload)
            console.log(response)
            if(!response.user) return
            const pathToRedirectTo = "/" || props.from
            history.push(pathToRedirectTo)//When user tries to hits a protected page but doesnt have access, then redirect them.
        } catch(err){
            console.log(err)
        }
    }

    return(
        <div className="container">
            {errorMessage ? <p>{errorMessage}</p> : null}
            <form>
                <div className="input">
                    <label htmlFor="username">Username</label>
                    <input
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin} disabled={loading}>Login</button>
            </form>
       </div>
    )
}