import React from 'react';
import {Routes , Route ,BrowserRouter} from 'react-router-dom';
import Home from './home.jsx';
import Signup from './signup.jsx';
import Login from './login.jsx';

const App = () =>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;