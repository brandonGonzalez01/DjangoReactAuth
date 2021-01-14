import React, {useState} from 'react'

export default function RegisterForm(){
        const [username, setUsername] = useState("")
        cont [password, setPassword] = useState("")
    
        const handleRegister = (e) =>{
            e.preventDefault()
        }

        return(
            <div className="container">
                <form>
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input
                            value={username}
                            onChange={setUsername}
                        />
                    </div>
                    <div className='input'>
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={setPassword}
                        />
                    </div>
                </form>
                <button onClick={handleRegister}/>
            </div>       
    )
}