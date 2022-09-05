import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import React, { useState } from "react";
import Navbar from './Home';

var back = '<-'

function ToolsNav(){
    return(
        <body>
        <header>
         <section id="home">
             <header>
                 <nav class="nav">
                   <Link to = '/Home' class="logo">{back}</Link>
     
                   <div class="hamburger">
                     <span class="line"></span>
                     <span class="line"></span>
                     <span class="line"></span>
                   </div>
     
                   <div class="nav__link hide">
                     <Link to={'Search'}>Search</Link>
                     <Link to={'Concepts'}>Concepts</Link>
                     <Link to={'Math'}>Math</Link>
                     <Link to={'Cites'}>Cites</Link>
                     <Link to={'Translator'}>Translator</Link>
                     <Link to={'Dictionaries'}>Dictionaries</Link>
                     <Link to={'Text corrector'}>Text corrector</Link>
                   </div>
                 </nav>
               </header>
               <style>
      { `
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Pattaya&family=Poppins:wght@200;400;600&family=Roboto&display=swap');
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
        a {
          text-decoration: none;
          color: rgb(45, 182, 175);
          font-size: 1.2rem;
          font-weight: bold;
          text-transform: uppercase;
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

        .hamburger {
          padding-right: 20px;
          cursor: pointer;
        }

        .hamburger .line {
          display: block;
          width: 40px;
          height: 5px;
          margin-bottom: 10px;
          background-color: black;
        }

        .nav__link {
          position: fixed;
          width: 94%;
          top: 5rem;
          left: 18px;
          
          background-color: blue; 
        }

        .nav__link a {
          display: block;
          text-align: center;
          padding: 10px 0;
          background-color: rgb(1, 136, 160);
          margin: 10px;
          border-radius: 5px;
        }

        .nav__link a:hover {
          border-bottom: 3px solid rgb(151, 232, 247);
          border-radius: 7px;
          transition: all 0.2s ease;
        }

        .nav__link a:active {
          border-bottom: 3px solid rgb(151, 232, 247);
          background-color: rgb(175, 238, 235)
        }

        .hide {
          display: none;
        }

        .content{
          display: flex;
          justify-content: center;
          text-align: justify;
          align-items: center;
          margin-top: 20%;
          color: rgb(17, 19, 19);
          font-weight: 700;
          font-size: 20px;
      
          font-family: poppins,sans-serif;
        }

        @media screen and (min-width: 600px) {
          .nav__link {
            display: block;
            position: static;
            width: auto;
            margin-right: 20px;
            background: none;
      
      
          }

          .nav__link a {
            display: inline-block;
            padding: 15px 20px;
      
      
          }

          .hamburger {
            display: none;
          }
      
          
        }

      }

     `}
    </style>
     
         </section>
     
         </header>
     

       </body>
    )
}


export function Tools(props){
    if(props.signin == false){
        return <Navigate to="/Login" />;
    }else{
        return(
            <div >
                <ToolsNav/>

            </div>
        )
        } 
}        





function Home(props){
    if(props.signin == false){
        return <Navigate to="/Login" />;
    }else{
        return(
            <div >
                <Navbar/>

            </div>
        )
        } 
}   

export default Home;