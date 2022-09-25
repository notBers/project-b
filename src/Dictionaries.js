import './App.css';
import { Link} from "react-router-dom";
import React, { useState} from "react";


var back = '<-'

export function Dictionary(){

  const [search, setSearch] = useState('');
  const [lang, setLang] = useState('en-us');
  const [word, setWord] = useState('');
  const [syonyms, setSynonyms] = useState([])
  const [definition, setDefinition] = useState('')
  const [example, setExample] = useState('')

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (lang == '') setLang('en-us')

    async function fetchData() {
      var bodys = {word: search, lang: lang}
      const response = await fetch("http://localhost:3001/GetWord", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
      const data = await response.json()

      setWord(data.word)
      setDefinition(data.definition)
      
  }
  fetchData()
};

  return(
        <body>
        
        <header>
             
                 <nav className="nav">
                   <Link to = '/Home/Tools' class="logo">{back}</Link>

                   <div className="logo">
                      <h1 id='search'>Dictionary</h1>
                   </div>
     
                 </nav>
                 <div id='option-input'>
                    <form id ='form' onSubmit={handleSubmit}>
                    <input type='text' id='input' placeholder='Search something' maxLength="100" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <select name="cars" id="cars" onChange={(e) => setLang(e.target.value)}>
                      <option value="en-us" id='Scholar'>English</option>
                      <option value="es" id='Author'>Spanish</option>
                    </select>
                    <input type='submit' id='submit' value='Search'/>
                   </form>
                </div>

            </header>

            
                <div className='container'>
                    <h1 id = 'results'>{word}</h1>
                    
                        <div className='display'>
                            <h1>definition: {definition}</h1>

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