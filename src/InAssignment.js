import { BrowserRouter, Routes, Route, Link, useNavigate, useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";


function InAssignmentProffesor(props){

  let count = 0;
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [assignment, setAssignment] = useState([]);
  const [description, setDescription] = useState('');
  const [limit, setLimit] = useState('');
  const location = useLocation();

  async function getclasses(a){
            if(a == 0){
              var bodys = {_id: props.id}
              const response = await fetch("http://localhost:3001/AssignmentExists", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
              const data = await response.json();
              const message = data.message;
              if(message == 'error in params'){
                navigate('/Home/Classes')
              }else if(message == 'it doesnt exists'){
                navigate('/Home/Classes')
                
              }else{
                setAssignment(message.name)
                setDescription(message.description)
                setLimit(message.limit)


              }

              setCounter(1)
            }  
    
            
     
        

    }
  


  useEffect(() => {
    if(count == 0){
        getclasses(counter)
        count = 1
    }
     
    
  }, [])



  return (
  <body>
   <header>
    <section id="home">
        <header>
            <nav class="nav">
              <a href = {`/Home/Classes/${location.state.id}`} class="logo">{'<-'}</a>


              <div class="nav__link hide">
                <Link to={'Student`sWork'} state={{id: props.id, prev_id: 'id'}}>Student`s Work</Link>
              </div>
            </nav>
          </header>

          <div id='container'>

            <div id='tan'>
                <h1 id='title'>{`Title: ${assignment}`}</h1>
                <h1 id='limit'>{`Limit Date: ${limit}`}</h1>
                <h1 id='description'>{`Instructions: ${description}`}</h1>
            </div>


          </div>


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
  overflow-x: hidden;
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

        #tan{
            padding: 10px;
            overflow: scroll;
            width: 100%;
            text-align: center;
            margin: auto;
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

          .results{
            overflow-x: hidden;
            width: 99%;
            border: 2px solid black;
            height: 200px;
            padding: 10px;  
            font-size: 60px;
            background-color: rgb(1, 136, 160);
            margin: 10px auto auto auto;
            border-radius: 5px;
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

          #title{
            font-size: 114px;
            text-align: center
          }

          #description{
            text-align: center
          }

          #limit{
            font-size: 50px;
            margin: 10px;
            text-align: center
          }
          
        }

      }

     `}
    </style>
  </body>
  );
}


function InAssignmentStudent(){
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


  function InAssignment(props){
    

    const { assignment_id } = useParams();



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
                    <InAssignmentStudent username={props.username} id={assignment_id}/>

                </div>
            )
        }else{

            return(
                <div>
                    <InAssignmentProffesor username={props.username} id={assignment_id} />
                </div>
            )

        }
    } 
}   

export default InAssignment;
