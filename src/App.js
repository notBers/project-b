import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import React, { useState } from "react";
import Home from './Tools';
import { Tools } from './Tools';
import { Search } from './search';
import { Bibliographies } from './cites';
import {Math} from './Calc'
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
  );
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

      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to='Home' />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="/Home/Tools/Math" element={<Math signin={true}/>}/>
        <Route path="/Home/Tools/Cites" element={<Bibliographies signin={true}/>}/>
        <Route path="/Home/Tools/Search" element={<Search signin={true}/>}/>
        <Route path="/Home/Tools" element={<Tools signin={true}/>}/>
        <Route path="Home" element={<Home signin={true}/>}/>
       
        
      </Routes>
    </div>
  );
}



export default App;
