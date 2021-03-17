import SignIn from "./Sign_in_Form";
import LogIn from "./Log_in_Form";
import { Redirect } from 'react-router';
import React, {useEffect, useState} from "react";


function Connexion() {

  const [role, setRole]=useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser)
      setRole(foundUser.role)
    }else{
      console.log("no user found")
    }
  }, []);
  return (
    <div>
      {role? <Redirect to="/Espace_perso"/>: 
      <div id="Connexion">
        <LogIn/>
        <SignIn/>
        </div>} 
      </div>
  );
}

export default Connexion;
