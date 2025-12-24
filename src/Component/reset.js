import { useState } from "react";

export default function Reset(){
    const [email,setEmail]=useState('');

    return <>
        <h1>Reset your Password.</h1>
        <input type='email' placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
        <button>Continue</button>
    </>
}