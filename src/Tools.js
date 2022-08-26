import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import React, { useState } from "react";
import Navbar from './Navbarandwrongforms';
import BasicSearch from './SERPAPI.JS';

var back = '<-'

export function Search(){
    return(
        <body>
        <header>
         <section id="home">
             <header>
                 <nav class="nav">
                   <Link to = '/Home/Tools' class="logo">{back}</Link>
     
                 </nav>
               </header>
               <div >
                
                <div id='option-input'>
                    <form id ='form'>
                    <h1>search for someting</h1>
                    <input type='text' id='input' defaultValue='Type something' ></input>
                    <div>
                        <h3>Author</h3><input type='checkbox' class ='checkbox'/>
                        <h3>.Edu</h3><input type='checkbox' class ='checkbox'/>
                    </div>
                    </form>
                </div>
                <div className='container'>
                    <div className='Search'>
                        <div className='engine'></div>
                        <div className='display'></div>
                    </div>

                    <div className='Search'>
                        <div className='engine'></div>
                        <div className='display'></div>
                    </div>
                    
                    
                    </div>

                </div>
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
        }

      }

     `}
    </style>
     
         </section>
     
         </header>
     

       </body>
    )
}

