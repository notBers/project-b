import './App.css';
import { Link} from "react-router-dom";
import React, { useState} from "react";

var back = '<-'

export function Traductor(){
    const [search, setSearch] = useState('');
    const [output, setOutput] = useState('Translation');
    

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!search) return;

      async function fetchData() {

        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3f10bba73emsh9af847ed70c4ddfp175cb0jsnfce47874f391',
            'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
          },
          body: '{"texts":["Just try it mate.","What are you waiting for?"],"to":["hi"],"from":"en"}'
        };
        
        const response = await fetch('https://lecto-translation.p.rapidapi.com/v1/translate/text', options);
        setOutput(response.json());
      }
      fetchData();
       
    };


    
  
    return(
          <body>
          
          <header>
               
                   <nav className="nav">
                     <Link to = '/Home/Tools' className="logo">{back}</Link>
  
                     <div className="logo">
                        <h1 id='search'>Traductor</h1>
                     </div>
                   </nav>

                     <div id='container'>
                      <form className="wrapper" onSubmit={handleSubmit}>
                        <div className="text-input">
                          <div id='left'>
                          <select className='select'></select>
                          <textarea spellCheck="false" className="from-text" placeholder="Enter text" onChange={e=> setSearch(e.target.value)}></textarea>
                          </div>
                          <div id='right'>
                          <select className='select'></select>
                          <textarea spellCheck="false" readOnly disabled className="to-text" value={output}></textarea>
                          </div>
                          <input type='submit' id='submit' value='Text'/>
                        </div>
                          
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

          body{
            background-color: #D5DBFF;
            margin: auto;
            
          }

          #submit{
            position: relative;
            margin: 10px auto auto auto;
            width: 58.75%;
            left: 20%;

          }

          

          #container{
            padding: 10%
            width:  100%;
            margin: auto;
            margin-top: 7%;
            height: 100%;
          }

          
          .from-text{
            height: 300px;
            width: 300px;
            padding: 4px;
            border-radius: 5px;
            border: 0px solid transparent;
          }

          .to-text{
            background-color: white;
            height: 300px;
            width:300px;
            padding: 4px;
            border-radius: 5px;
            border: 0px solid transparent;
          }

          #left{
            position: relative;
            left: 20%;
            float: left;
          }

          #right{
            position: relative;
            float: right;
            margin: 0;
          }





          .select{
            border: 0px solid transparent;
            border-radius: 5px;
            position: relative; 
            left: -5px;
            margin: .5%;
            width: 302px;

          }

       `}
      </style>
       
           
       
           
       
  
         </body>
      )
  

  } 
