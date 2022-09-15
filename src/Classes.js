import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


function ClassProffesor(props){

  let count = 0

  const [classes, setClasses] = useState([])
  const [counter, setCounter] = useState(0)

  async function getclasses(){

            var bodys = {Professor: props.username}
            const response = await fetch("http://localhost:3001/GetClass", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
            const data = await response.json();
            const message = data.message;
            console.log('hola')
            message?.map(e=>{
                setClasses((arr) => [...arr, e.name])
            })
    
            
     
        

    }
  


  useEffect(() => {
    if(count == 0){
        getclasses()
        count = 1
    }
     
    
  }, [])

  return (
  <body>
   <header>
    <section id="home">
        <header>
            <nav class="nav">
              <a href = '/Home' class="logo">{'<-'}</a>

              

              <div class="nav__link hide">
                <Link to={'NewGroup'}>+ New Group</Link>
                <Link to={'NewClass'}>+ New Class</Link>
              </div>
            </nav>
          </header>

          <div id='container'>{classes?.map(e=><div className="results">{e}</div>)}</div>


    </section>

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
  </body>
  );
}

function ClassStudent(){
    return (
    <body>
     <header>
      <section id="home">
          <header>
              <nav class="nav">
                <a href = '/account' class="logo">Account</a>
  
                <div class="nav__link hide">
                  <Link to={'Dashboard'}>Dashboard</Link>
                  <Link to={'Tools'}>Tools</Link>
                  <Link to={'Classes'}>Classes</Link>
                </div>
              </nav>
            </header>
  
  
      </section>
  
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
    </body>
    );
  }


  function Classes(props){

    const navigate = useNavigate();

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
    fetchData()

    if(props.signin == 'false'){
        navigate('/login')
    }else{

        if(status == "ok"){
            return(
                <div >
                    <ClassStudent username={props.username}/>

                </div>
            )
        }else{

            return(
                <div>
                    <ClassProffesor username={props.username} />
                </div>
            )

        }
    } 
}   

export default Classes;

