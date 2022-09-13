import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import Home from './Tools';
import { Tools } from './Tools';
import { Search } from './search';
import { Bibliographies } from './cites';
import {Math} from './Calc'
import { Traductor } from './Traductor';
import { TextCorrector } from './TextCorrector';
import { NewGroup } from './NewGroup';

function Login(){

  const [role, setRole] = useState('Student')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) =>{
    e.preventDefault()
    if (mail == '') return
    if (password == '') return

    async function Login(){

      if(role == 'Student'){
        var bodys = {mail: mail, password: password}
        const response = await fetch("http://localhost:3001/Login", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
        const message = await response.json()
        console.log('hola')
        if(message.message == "ok"){
          navigate('/Home')

        }else{
          setMessage('Invalid credentials')
        }

    
      }else{

        var bodys = {mail: mail, password: password}
        const response = await fetch("http://localhost:3001/LoginTeacher", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
        const message = await response.json()
        if(message.message == "Invalid credentials"){
          setMessage('Invalid credentials')
        }else{
          navigate('/Home')
        }

      }
      

    }
    Login()    

  }


  return (
    <div className= "wrapper fadeInDown">
      <div id="formContent">


        <a><h2 className='active'>Sign in</h2></a>
        <Link  to='/Signup'><h2 className='inactive underlineHover'>Sign up</h2></Link>

        <div className='fadeIn first'>
          <img src='logo.svg' id='icon' alt='User Icon'/>
        </div>
        
        <form onSubmit={handleSubmit}>
          <h1 style={{"color": "red"}}>{message}</h1>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" onChange={e => setMail(e.target.value)}/>       
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" onChange={e => setPassword(e.target.value)}/>
          <select id='cars' value={role} onChange={e => setRole(e.target.value)}>
            <option value='Student'>Student</option>
            <option value='Teacher'>Teacher</option>
          </select>
          <input type="submit" className="fadeIn fourth login" value="LogIn"/>

        </form>

      </div>
    </div>
  );
}

function Signup(){
  const navigate = useNavigate()

  const [role, setRole] = useState('Student')
  const [mail, setMail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (mail == '') return
    if (name == '') return
    if (password == '') return

    async function Register(){
  

      if(role == 'Student'){
        var bodys = {mail: mail, name: name, password: password}
        const response = await fetch("http://localhost:3001/RegisterUser", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
        const message = await response.json()
        if(message.message == "User already exists"){
          setMessage('User already exists')
        }else{
          navigate('/Home')
        }

    
      }else{

        var bodys = {mail: mail, name: name, password: password}
        const response = await fetch("http://localhost:3001/RegisterTeacher", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
        const message = await response.json()
        
        if(message.message == "Professor already exists"){
          setMessage('Professor already exists')
        }else{
          navigate('/Home')
        }

      }


    }

    Register()


  }

  return (
    <div className= "wrapper fadeInDown">
      <div id="formContent">
        <Link  to='/Login'><h2 className='inactive underlineHover'>Sign in</h2></Link>
        <a><h2 className='active '>Sign up</h2></a>

        <div className='fadeIn first'>
          <img src='logo.svg' id='icon' alt='User Icon'/>
        </div>
        
        <form onSubmit={handleSubmit}>
          <h1 style={{"color": "red"}}>{message}</h1>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="mail" onChange={e=> setMail(e.target.value)}/> 
          <input type="text" id="name" className="fadeIn second" name="login" placeholder="name"  onChange={e=> setName(e.target.value)}/>         
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" onChange={e=> setPassword(e.target.value)}/>
          <select id='cars' value={role} onChange={e => setRole(e.target.value)}>
            <option value='Student'>Student</option>
            <option value='Teacher'>Teacher</option>
          </select>
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
        <Route path="/Home/Tools/TextCorrector" element={<TextCorrector signin={true}/>}/>
        <Route path="/Home/Tools/Translator" element={<Traductor signin={true}/>}/>
        <Route path="/Home/Tools/Math" element={<Math signin={true}/>}/>
        <Route path="/Home/Tools/Cites" element={<Bibliographies signin={true}/>}/>
        <Route path="/Home/Tools/Search" element={<Search signin={true}/>}/>
        <Route path="/Home/Tools" element={<Tools signin={true}/>}/>
        <Route path="Home" element={<Home signin={true}/>}/>
        <Route path="/Classes/NewGroup" element={<NewGroup signin={true}/>}/>
        
      </Routes>
    </div>
  );
}



export default App;
