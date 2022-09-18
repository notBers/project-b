import {atan2, chain, derivative, e, evaluate, log, pi, pow, round, simplify, sqrt, parse, toString } from 'mathjs'
import './App.css';
import { Link} from "react-router-dom";
import React, { useState} from "react";


var back = '<-'

export function Math(){
    const [search, setSearch] = useState('');
    const [output, setOutput] = useState('');
    const[type, setType] = useState('Simplify')
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!search) return;

      switch(type){
        case('Simplify'):
          setOutput(simplify(search).toString()) 
      
        case('Evaluation'):
          setOutput(evaluate(search))
      }
       
    };
  
    return(
          <body>
          
          <header>
               
                   <nav className="nav">
                     <Link to = '/Home/Tools' className="logo">{back}</Link>
  
                     <div className="logo">
                        <h1 id='search'>Math</h1>
                     </div>
       
                   </nav>
                   <div id='option-input'>
                      <form id ='form' onSubmit={handleSubmit}>
                      <input type='text' id='input' placeholder='Operation here' maxLength="100" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                      <select name="cars" id="cars" onChange={(e) => setType(e.target.value)}>
                        <option value="Evaluation" id='Evaluation'>Evaluation</option>
                        <option value="Simplify" id='Simplify'>Simplify</option>
                        <option value="Linear equations" id='Linear equations'>Linear equations</option>
                      </select>
                      <div id='input'>{output}</div>
                      <input type='submit' id='submit' value='Search'/>
                     </form>
                  </div>
  
              </header>
  
              
              <style>
        { `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background-color: #F8F8FF;
    padding-top: 0%;
  }
          .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #014364;
            padding: 20px 0 20px 0
          }
          .logo {
            font-size: 32px;
            color: rgb(45, 182, 175);
            padding-left: 20px;
            cursor: default;
            padding-right: 50px;
          }
          #option-input{
              
              margin-left: 1%;
              font-size: 32px;
              color: rgb(45, 182, 175);
              cursor: default;
              width: 94.1% ;
              margin-left: 5%;
             
            
          }
          
          .result{
            margin: 20px
          }
          
          #form{
            margin-top: 1%;
            width: 110%
            margin: auto;
          }
          #input{
            width: 81%;
            margin: auto;
            text-align: center;
          }
          #cars{
            width: 14.5%;
            height: 1.5699cm;
            margin: auto;
            border-radius: 5px;
            border-color: transparent;
            margin-left: .2%;
          }
          #submit{
            width: 95.7%;
            margin: auto;
            margin-bottom: .5%;
          }
  
  
  
          #results{
            margin-top: 1%;
            text-align: center;
          }
          
          .container{
            position: relative;
            background-color: white;
            height: 75%;
            width: 90%;
            margin: auto;
            border-radius: 8px;
          }
          .display{
            width: 90%;
            height: 80%;
            margin: auto;
            overflow: scroll;
          }
          body{
            background-color: #D5DBFF;
            margin: auto;
            
          }
        }
       `}
      </style>
       
           
       
           
       
  
         </body>
      )
  

  } 