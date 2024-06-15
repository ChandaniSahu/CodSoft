import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const Signup = () =>{

const [signup,setSingup]=useState({uname:'' , email :'' , pass:''});

const handleInput = (e)=>{
    setSingup({...signup,[e.target.name]:e.target.value})
}

const handleSignup = async () =>{
//    const res = await axios.post('http://localhost:5000/createUser',signup)
// const res = await axios.post('http://localhost:5000/ch')
const res = await axios.get('http://localhost:3000/home')
console.log(res)
//    console.log('handleSignup',res)
}
    return(
        <>
         <label>Username :</label><br/>
         <input type='text' placeholder='Enter Username : ' value={signup.uname}
         name='uname' onChange={handleInput}/><br/><br/>

         <label>Email :</label><br/>
         <input type='text' placeholder='Enter Email : ' value={signup.email}
         name='email' onChange={handleInput}/><br/><br/>

         <label>Password :</label><br/>
         <input type='text' placeholder='Enter Password : ' value={signup.pass}
        name='pass'onChange={handleInput}/><br/><br/>

         <label>Confirm Password :</label><br/>
         {/* <input type='text' placeholder='Enter Confirm Password : ' value={signup.Cpass} */}
         {/* name='Cpass' onChange={handleInput}/><br/><br/> */}
         <button onClick={handleSignup}>Signup</button>
        </>
    )
}
export default Signup;