import './App.css';
import {Link, Navigate, useNavigate} from "react-router-dom";
import React, { useState} from "react";


var back = '<-'

function ClassSucessful(props){
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [names, setNames] = useState('');
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');


  
  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (name == '') return;



    async function fetchData1() {
      var bodys = {name: name, Professor: props.username, group: names}
      const response = await fetch("http://localhost:3001/NewClass", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
      const data = await response.json();

      if(data.message == 'Class created'){


        setMessage1('')
        navigate('/Home/Classes')


      }else{
            setMessage1(data.message)
      }
        


    }
    fetchData1();
     
  };


  return(
        <body>
        
        <header>


            </header>

            
                <div className='container'>

                <div id='option-input'>
                    <form id ='form' onSubmit={handleSubmit1}>
                      <div className='centers'>
                        <h3>Class name: </h3><h3 style={{'color': 'red'}}>{message1}</h3><input type='text' id='input' placeholder='name' maxLength="100" value={name} onChange={(e) => setName(e.target.value)}></input>
                      </div>
                      <div  className='centers'>
                        <h3>Group: </h3><h3 style={{'color': 'red'}}>{message}</h3><input type='text'  id='input' placeholder='name' maxLength="100" value={names} onChange={(e) => setNames(e.target.value)}></input>
                      </div>
                      <input type='submit' id='submit' value='Create Class'/>
                   </form>
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

        .centers{
            margin: auto;
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
          width: 81%;
          margin: 2% auto 0 0;
          margin-bottom: .5%;
          margin-top: 30px
        }

        #submit2{
            text-align: center;
            width: 200px;
            margin: auto;
            margin-bottom: .5%;
            margin-left: 5px;
            margin-top: 20px;
          }



        #results{
          margin-top: 1%;
          text-align: center;
        }
        
        .container{
          padding-top: 50px;
          position: relative;
          background-color: white;
          height: 46%;
          width: 15%;
          margin: auto;
          margin-top: 8%;
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

export function NewClass(props){

    const [status, setStatus] = useState('')


    async function fetchData() {
        var bodys = {mail: props.username}
        const response = await fetch("http://localhost:3001/UserExists", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
        const data = await response.json();

        if(data.message == 'ok'){
            setStatus(data.message)
        }else{
            setStatus("0")
        
        }
    }

    fetchData();


    console.log(status)

    if(props.signin == 'true' && status == "0"){
            console.log('hola')
            return(
                <ClassSucessful username={props.username}/>

            )
        
    }else if(status == "ok"){

        return(<Navigate to="/Home" />)
        
    }
}