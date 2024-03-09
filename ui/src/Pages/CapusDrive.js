import React, { useEffect, useState } from "react";
import "../CSS/CampusDrive.css"
import { Link, useParams } from "react-router-dom";
function CampusDrive(){
  let[hiring,sethiring]=useState("");
  let {Id}=useParams();
  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/Hiring/get`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          sethiring(data);
          console.log(hiring); 
        } 
        catch (error) {
          console.error('Error fetching data: ', error.message);
        }
  }  ;
  if(1)
  {
      fetchData();
  }        
   },[1])
  return(
    <div>
       <div id="bcd"> I.K. Gujral Punjab Technical University</div>
       <div id="offf">
        <div id="off1">Off Campus Recuirtment</div>
       </div>
        <div id="doremon">
          {
            hiring && hiring.map(hire=>(
              <Link to={`/HiringDetails/${Id}/${hire.jobId}`}><div id="thisthat"><h2>{hire.companyName}</h2>
              <h4>ROLE : {hire.role}</h4>
              <h4>LOCATION : {hire.location}</h4>
              <h4>CTC : {hire.ctc/100000} LPA</h4>
              </div></Link>
            ))
          }
          
        </div>
    </div>
  )
}
export default CampusDrive;

