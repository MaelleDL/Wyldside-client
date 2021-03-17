import React, {useEffect, useState} from "react";
import Visitor from "./Visitor";
import Admin from "./Admin";


function PersonalSpace() {
  const [role, setRole]=useState("");
  const [user, setUser]=useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser.user);
      setRole(foundUser.user.role)
    }else{
      console.log("no user found")
    }
  }, []);
    return (
      <div className="personal-space">
        <div>
          {role=="VISITOR" && <Visitor user={user}/>} {role=="ADMIN" && <Admin user={user}/>}</div>
      </div>
    );
  }
  
  export default PersonalSpace;
  