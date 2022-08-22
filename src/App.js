import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";



function Navbar(){
  return('hola');
}

function Login(){
  return (
    <div className= "wrapper fadeInDown">
      <div id="formContent">


        <a><h2 className='active'>Sign in</h2></a>
        <Link  to='/Signup'><h2 className='inactive underlineHover'>Sign up</h2></Link>

        <div className='fadeIn first'>
          <img src='logo.svg' id='icon' alt='User Icon'/>
        </div>
        
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>       
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
          <input type="submit" className="fadeIn fourth login" value="LogIn"/>
        </form>

        <div id='fortFooter'>
          <a class="underlineHover" href='#'>Forgot password</a>
        </div>
      </div>
    </div>
  )
}

function Signup(){
  return (
    <div className= "wrapper fadeInDown">
      <div id="formContent">
        <Link  to='/Login'><h2 className='inactive underlineHover'>Sign in</h2></Link>
        <a><h2 className='active '>Sign up</h2></a>

        <div className='fadeIn first'>
          <img src='logo.svg' id='icon' alt='User Icon'/>
        </div>
        
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="mail"/>       
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
          <input type="text" id="confirm-password" className="fadeIn third" name="login" placeholder="confirm password"/>
          <input type="submit" className="fadeIn fourth login" value="LogIn"/>
        </form>

        <div id='fortFooter'>
          <a class="underlineHover" href='#'>Forgot password</a>
        </div>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="Login" element={<Login />} />
        <Route exact path="Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}



export default App;
