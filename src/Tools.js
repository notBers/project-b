import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import React, { useState, useEffect} from "react";
import Navbar from './Navbarandwrongforms';

var back = '<-'

export  function Search(){



  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [output, setOutput] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;

    async function fetchData(){
      const response = await fetch('http://localhost:3000/Scholar');
      const data = await response.json()
      const results = data.message;
      setOutput(results);
    }
    fetchData();
   }




  


  return(
        <body>
        
        <header>
             
                 <nav className="nav">
                   <Link to = '/Home/Tools' class="logo">{back}</Link>

                   <div className="logo">
                      <h3 id='search'>Search</h3>
                   </div>
     
                 </nav>
                 <div id='option-input'>
                    <form id ='form' onSubmit={handleSubmit}>
                    <input type='text' id='input' defaultValue='Search something' maxLength="100" value={search} onChange={(e) => setSearch(e.target.value)}></input>
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
                    
                        <div className='display'>
                            <h1 id = 'result'>{output}</h1>
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
          height: 80%;
          margin: auto;
          border: 2px solid blue;
          text-align: center
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

