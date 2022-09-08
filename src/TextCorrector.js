import './App.css';
import { Link} from "react-router-dom";
import React, { useState} from "react";

var back = '<-'

export function TextCorrector(){
    const [search, setSearch] = useState('');
    const [output, setOutput] = useState('');
  
    
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!search) return;

  
      async function fetchdata(){    
        const encodedParams = new URLSearchParams();
        encodedParams.append("language", "en-US");
        encodedParams.append("text", search);
    
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '3f10bba73emsh9af847ed70c4ddfp175cb0jsnfce47874f391',
                'X-RapidAPI-Host': 'dnaber-languagetool.p.rapidapi.com'
            },
            body: encodedParams
        };
    
        fetch('https://dnaber-languagetool.p.rapidapi.com/v2/check', options)
            .then(response => response.json())
            .then(response => setOutput(response.matches[0].message))
            .catch(err => setOutput(err));
          
      }
      
      fetchdata();
      
       
    };
  
    return(
          <body>
          
          <header>
               
                   <nav className="nav">
                     <Link to = '/Home/Tools' class="logo">{back}</Link>
  
                     <div className="logo">
                        <h1 id='search'>Text Corrector</h1>
                     </div>
       
                   </nav>
              </header>

                <form id='container' onSubmit={handleSubmit}>
                  <div className='text'>
                    <textarea className='container-in' placeholder='Write your text' onChange={(e)=> setSearch(e.target.value)}>
                        
                    </textarea>
                  </div>
                  <div className='text'>
                  <textarea className='container-out' readOnly disabled value={output} placeholder='Output'>

                  </textarea>
                  </div>
                  <input type='submit' id='submit' value='correct'/>
                </form>
              
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
            width: 95.7%;
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
            height: 70px;
            width: 100%;
            margin: auto;
            margin-bottom: .5%;
          }
  
          #container{
            border-radius: 10px;
            background-color: white;
            width: 80%;
            margin: 2% auto;
            height: 80%;
            padding: 2%;
          }
  
          #results{
            margin-top: 1%;
            text-align: center;
          }
          
          .container-in{
            padding: 1%;
            border-radius: 10px;
            height: 400px;
            margin: auto auto 1%;
            width: 100%;

          }

          .container-out{
            padding: 1%;
            border-radius: 10px;
            border: 1px solid black;
            height: 400px;
            margin: auto auto 1%;
            width: 100%;

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