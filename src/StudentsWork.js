import './App.css';
import {Link, Navigate, useNavigate, useLocation} from "react-router-dom";
import React, {useState, useEffect} from "react";
import { Students } from './Students';


var back = '<-'





function StudentsSuccesful(props){

    let count = 0
    const location = useLocation()
    const [students, setStudents] = useState([]);
    const [counter, setCounter] = useState(0);
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [mark, setMark] = useState('');
    const [name, setName] = useState('')
    const [iin, setIn] = useState('')

    async function getclasses(a){
              if(a == 0){
                var bodys = {name: location.state.id}
                const response = await fetch("http://51.222.30.12:3001/StudentsWork", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
                const data = await response.json();
                const message = data.students;
                const student = message;
                student?.map(e=>{
                    setStudents((arr) => [...arr, e.name]);
                })

                setCounter(1);
              }  
      
    }
    
    useEffect(() => {
      if(count == 0){
          getclasses(counter)
          count = 1
      }
       
      
    }, [])

    const onclick = async (e) => {
      setName(e.target.value)
      var bodys = {name: location.state.id, username: e.target.value}
      const response = await fetch("http://51.222.30.12:3001/StudentWork", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
      const data = await response.json();
      const message = data.students;
      const student = message;
      
        setDescription(student.message);
        setLink(student.link);
        setMark(student.mark)
    }

    const onSubmit = async (e) => {
      var bodys = {mark: mark, name: name, assignment: location.state.id }
      const response = await fetch("http://51.222.30.12:3001/StudentWorkMark", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
      const data = await response.json();
      const message = data.students;
      const student = message;
      setMark(student.mark)
    }



  return(
    <body>
    <header>
     <section id="home">

 
           <div id='aside'>
           {students.sort()?.map(e=><button onClick={onclick} className="results" value={e} >{e}</button>)}
            </div>

            <div id='aside-left'>
                <div id='vwrapper'>
                    <h1 id='description'>{description}</h1>
                    <h2 id='links'>{link}</h2>
                    <h3 id='links'>mark: {mark}</h3>
                    <div>
                        <input type = 'text' placeholder='enter the mark here' onChange={e => setMark(e.target.value)}/>
                        <button type='button' onClick={onSubmit} id='submit'>Upload mark</button>
                    </div>
                </div>
            </div>
 
 
     </section>
 
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

        #description{
          margin-top: 20px
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

        #vwrapper{
          width: 50%;
          margin: auto;
          text-align: center
        }

        #home{
            width: 100%;
            height: 100%;
        }

        #aside{
            width: 30%;
            height: 100vh;
            background-color: white;
            float: left;
            border: 1px solid blue;

        }

        #aside-left{
          width: 70%;
          height: 100vh;
          background-color: white;
          float: right;
          border: 1px solid blue;

      }

        .centers{
            margin: auto;
        }
        
        .result{
          margin: 20px
        }

        #input{
            border-radius: 5px;
            padding: 5px;
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



          .results{
            width: 100%;
            border-bottom: 2px solid black;
            height: 50px;
            background-color: white;  
            font-size: 25px;
          }

          .results:hover {
            border-bottom: 3px solid rgb(151, 232, 247);
            border-radius: 7px;
            transition: all 0.2s ease;
          }
  
          .results:active {
            border-bottom: 3px solid rgb(151, 232, 247);
            background-color: rgb(175, 238, 235)
          }
          .inresults{
            font-size: 60px;
            color: black;
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

export function StudentsWork(props){
    const [status, setStatus] = useState('')


    async function fetchData() {
        var bodys = {mail: props.username}
        const response = await fetch("http://51.222.30.12:3001/UserExists", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
        const data = await response.json();

        if(data.message == 'ok'){
            setStatus(data.message)
        }else{
            setStatus("0")
        
        }
    }

    fetchData();


    if(props.signin == 'true' && status == "0"){
            return(
                <StudentsSuccesful username={props.username}/>

            )
        
    }else if(status == "ok"){

        return(<Navigate to="/Home" />)
        
    }
}