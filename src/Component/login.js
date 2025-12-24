import { useState } from "react";

export default function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return <>
        <h1>Login to the portal.</h1>
        <input type="email" placeholder='Enter Email..' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button>Login</button>
    </>
}