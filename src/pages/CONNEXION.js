import SignIn from "../components/Sign_in_Form";
import LogIn from "../components/Log_in_Form";
import { Redirect } from 'react-router';
import React from "react";


const Connexion=({connected, setConnected})=> {

  return (
    <div className="connexion">
      {connected===true? <Redirect to="/Espace_perso"/>: 
      <div className="connexion">
        <LogIn connected={connected} setConnected={setConnected}/>
        <SignIn connected={connected} setConnected={setConnected}/>
        </div>
        } 
      </div>
  );
}

export default Connexion;
