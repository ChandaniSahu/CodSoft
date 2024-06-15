import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from './profilePhoto.jpeg' ;
const Home = () =>{
    return(
        <>
       <div>
        <img src={profilePhoto} width={100} height={100}/>
           <div>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
            </div>
       </div>
        </>
    )
}
export default Home;