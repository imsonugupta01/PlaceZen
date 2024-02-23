import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css"

function Login(){
  let[Username,setUsername] = useState("");
  let[Password,setPassword]=useState("");
  let[Id,setId]=useState();
  function input1(event){
    console.log(event.target.value);
    setUsername(event.target.value);
  }
  function input2(event){
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`http://localhost:8050/student/GetProfile/${Username}/${Password}`);
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setId(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
     if(Username || Password)
        {  console.log(Username +" " + Password )
          fetchData();}

  }, [Username, Password]);
    return(
      <div>
        <div id="bcd"> I.K. Gujral Punjab Technical University</div>
        <div id="mmm">
        <h1><center>Welcome to PlaceZen</center></h1>
        <h2><center>Student</center></h2>
        <label><center>Username</center></label>
        <center><input value ={Username} onChange={input1} placeholder="Username "></input></center>
        <center><label>Password</label></center>
        <center><input value={Password} onChange={input2} placeholder="Password "></input></center>
        <center><button ><Link to={`/StudentProfile/${Id}`}>Login</Link></button></center>
        <center>Create an account <button><Link to="/SignUp">SignUp</Link></button></center><br></br>
        </div>
      </div>
      
      
    );
}
export default Login;