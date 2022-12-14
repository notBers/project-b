import './App.css';
import { Link} from "react-router-dom";
import React, { useState} from "react";

var back = '<-'

export function Traductor(){
    const [search, setSearch] = useState('');
    const [output, setOutput] = useState('Translation');
    const [lanin, setLanin] = useState('en')
    const [lanout, setLanout] = useState('es')
    

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!search) return;

      async function fetchData() {

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '3f10bba73emsh9af847ed70c4ddfp175cb0jsnfce47874f391',
            'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
          }
        };
        
        fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${lanin}%7C${lanout}&q=${search.replaceAll(' ', '+')}!&mt=1&onlyprivate=0&de=a%40b.c`, options)
          .then(response => response.json())
          .then(response => setOutput(response.responseData.translatedText))
          .catch(err => setOutput(err));
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
                          <select className='select' onChange={(e) => setLanin(e.target.value)} value={lanin}>
                            <option value='en'>English</option>
                            <option value='es'>Spanish</option>
                            <option value='it'>Italian</option>
                            <option value='fr'>French</option>
                          </select>
                          <textarea spellCheck="false" className="from-text" placeholder="Enter text" onChange={e=> setSearch(e.target.value)}></textarea>
                          </div>
                          <div id='right'>
                          <select className='select' onChange={(e) => setLanout(e.target.value)} value={lanout}>
                            <option value='en'>English</option>
                            <option value='es'>Spanish</option>
                            <option value='it'>Italian</option>
                            <option value='fr'>French</option>
                          </select>
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
    overflow-x: hidden;
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
