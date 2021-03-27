import React, {useEffect, useState} from "react";
import  {Redirect} from 'react-router-dom';
import Visitor from "../components/Visitor";
import Admin from "../components/Admin";
import AuthService from '../services/auth.service';



function PersonalSpace({connected}) {
  
  const [role, setRole] = useState("")
  
  useEffect(() => {
    checkRole()
  }, [])
  
  
  const checkRole=()=>{
    AuthService.checkAdmin()
    .then(response=>{      
      if(response===true){
        setRole("ADMIN")
      }else{
        setRole("VISITOR")
      }
      
    })
  }
  
    return (
      <div className="personal-space">
        {role==="ADMIN"?
          <Admin /> :
          <Visitor connected={connected}/> 
        }
        {connected===false && <Redirect to="/Identification"/>}
      </div>
    );
  }
  
  export default PersonalSpace;
  