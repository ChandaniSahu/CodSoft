import React, { useState } from 'react';

const Login =()=>{
    const [login , setLogin]=useState({email:'' , pass:''});

    const handleInput=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    return(
        <>
        <label>Email :</label><br/>
        <input type='email' placeholder='Enter email :' value={login.email}
        name='email' onChange={handleInput}/><br/><br/>

        <label>Password :</label><br/>
        <input type='text' placeholder='Enter password :' value={login.pass}
        name='pass' onChange={handleInput}/><br/><br/>
        
        </>
    )
}

export default Login;