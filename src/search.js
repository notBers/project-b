import './App.css';
import { Link} from "react-router-dom";
import React, { useState} from "react";


var back = '<-'

export function Search(){

  const [search, setSearch] = useState('');
  const [type, setType] = useState('engine=google_scholar');
  const [output, setOutput] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (type == '') setType('engine=google_scholar')

    async function fetchData() {
      var bodys = {engine: (type+'&'), q: search.replaceAll(' ', '+') }
      const response = await fetch("http://51.222.30.12:3001/Scholar", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
      const data = await response.json();
      var counter = 1;
      var res;
      var img;
      switch(bodys.engine){
        case('engine=google_scholar&'):
        
          res = data?.map(result => {
            var single = `(${counter}) Title : (${result.title})  |   Summary : (${result.summary})  |   Link : (${result.link})  |   Cite id : (${result.cite_tool})`
            counter += 1;
            return(single)

          })
          var fmap = res.map(e => <h3 className='result'>{e}</h3>);
          
          break
        case('tbm=isch&'):
          res = data.map(result => {
            counter += 1;
            img = result.image_link
            return(img)
          })
          var fmap = res.map(e => <img src={e}/>);
          break
      }
      setOutput(fmap);
    }
    fetchData();
     
  };

  return(
        <body>
        
        <header>
             
                 <nav className="nav">
                   <Link to = '/Home/Tools' class="logo">{back}</Link>

                   <div className="logo">
                      <h1 id='search'>Search</h1>
                   </div>
     
                 </nav>
                 <div id='option-input'>
                    <form id ='form' onSubmit={handleSubmit}>
                    <input type='text' id='input' placeholder='Search something' maxLength="100" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <select name="cars" id="cars" onChange={(e) => setType(e.target.value)}>
                      <option value="engine=google_scholar" id='Scholar'>Scholar</option>
                      <option value="tbm=isch" id='Author'>Images</option>
                    </select>
                    <input type='submit' id='submit' value='Search'/>
                   </form>
                </div>

            </header>

            
                <div className='container'>
                    <h1 id = 'results'>Results</h1>
                    
                        <div className='display'>
                            {output}
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

