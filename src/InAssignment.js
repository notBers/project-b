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
              <Link to = {`/Home/Classes/${location.state.id}`} className="logo">{'<-'}</Link>


              <div class="nav__link hide">
                <Link to={'StudentsWork'} state={{id: props.id}}>Student`s Work</Link>
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


function InAssignmentStudent(props){

  
  let count = 0;
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [assignment, setAssignment] = useState([]);
  const [description, setDescription] = useState('');
  const [limit, setLimit] = useState('');
  const [content, setContent] = useState('')
  const [link, setLink] = useState('')
  const [mark, setMark] = useState('')
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content == '') return;



    async function fetchData1() {
      var bodys = {name: props.username, message: content, link: link, assignment: props.id}
      const response = await fetch("http://localhost:3001/NewUserAssignment", {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(bodys)});
      const data = await response.json();

      if(data.message == 'you already uploaded this task'){
        setMark(data.mark)
        alert('You already uploaded this task')
      }else{
        alert('Uploaded')
      }
        


    }
    fetchData1();
     
  };



  return (
  <body>
   <header>
    <section id="home">
        <header>
            <nav class="nav">
              <Link to = {`/Home/Classes/${location.state.id}`} className="logo">{'<-'}</Link>
            </nav>
          </header>

          <div id='container'>

            <div id='tan'>
                <h1 id='title'>{`Title: ${assignment}`}</h1>
                <h1 id='limit'>{`Limit Date: ${limit}`}</h1>
                <h1 id='description'>{`Instructions: ${description}`}</h1>
                <hr></hr>
                <h1>{`mark: ${mark}`}</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div id='center'>
                <textarea id='contents' placeholder="Enter text or description or task" maxLength='10000' value={content} onChange={(e) => setContent(e.target.value)} />
                <input id='con' type='text' placeholder='submit a link (optional)' value={link} onChange={e => setLink(e.target.value)}/>
                <input type='submit' id='submit' value='Submit task'/>
              </div>

            </form>


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
            overflow-x: hidden;
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

        #center{
          margin: auto;
          width: 30%

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

        #contents{
          width: 100%;
          height: 200px;
          padding: 10px;
          border-radius: 10px;
          margin: 20px
        }

        #con{
          width: 100%;
          height: 50px;
          padding: 10px;
          border-radius: 10px;
          margin: 20px
        }

        #submit{
          width: 100%
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
