import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import React, { useState} from "react";
import Navbar from './Navbarandwrongforms';
import BasicSearch from './SERPAPI.JS';
import { type } from '@testing-library/user-event/dist/type';

var back = '<-'

export function Search(){

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [output, setOutput] = useState("");


  const handleSubmit = (event) => {

    if(type == ""){
      setType('Scholar')
    }   

    if(search == ''){
      setOutput('NO SEARCh')
      return 0;
    }

    switch(type){
      case('Scholar'):
        console.log('jola');
        break;
      case('Regular Search'):
        console.log('');
        break;
      case('Cites'):
        console.log('jola');
        break;
      case('Author'):
        console.log('jola');
        break;
    }
    
  }
  return(
        <body>
        
        <header>
             
                 <nav class="nav">
                   <Link to = '/Home/Tools' class="logo">{back}</Link>

                   <div class="logo">
                      <h3 id='search'>Search</h3>
                   </div>
     
                 </nav>
                 <div id='option-input'>
                    <form id ='form' onSubmit={handleSubmit}>
                    <input type='text' id='input' defaultValue='Search something' maxlength="100" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <select name="cars" id="cars" onChange={(e) => setType(e.target.value)}>
                      <option value="Scholar" id='Scholar'>Scholar</option>
                      <option value="Regular search" id='Regular-Search'>Regular search</option>
                      <option value="Cites" id='Cites'>Cites</option>
                      <option value="Author" id='Author'>Author</option>
                    </select>
                    <input type='submit' id='submit' value='Search'/>
                   </form>
                </div>

            </header>

            
                <div className='container'>
                    <h1 id = 'results'>Results</h1>
                    <div className='Search'>
                        <div className='display'>
                            
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
        
        #form{
          margin-top: 1%;
          width: 110%
          margin: auto;
        }

        #input{
          width: 81%;
          margin: auto
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
          margin: auto;
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

