import React, {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const Logschema=yup.object().shape({
    mail:yup.string().required(),
    password:yup.string().min(8).required()
    })

function SignIn() {

    const {register, handleSubmit, errors}=useForm({
        resolver:yupResolver(Logschema)
      });
      const [role, setRole]=useState("");
      
      const handleLog=(data)=>{
        axios.post(`http://localhost:3000/auth/login`, data)
        .then(res => {
          let userInfo=res.data.data
          console.log(userInfo)
          localStorage.setItem('user',JSON.stringify(userInfo))
          setRole(userInfo.user.role)
        })
      } 
    return(
        <div className="big-card">
          {role? <Redirect to="/Espace_perso"/> : 
          <form onSubmit={handleSubmit(handleLog)} >
            <h2 className="title-Green">CONNEXION</h2>
            <div className="Form Connect">

              <label htmlFor="mail">IDENTIFIANT (mail)</label>
              <input type="text" name="mail" id="mail" ref={register}/>
              <p>{errors.usermail && "L'identifiant est requis"}</p>

              <label htmlFor="password">MOT DE PASSE</label>
              <input type="password" name="password" id="password" ref={register}/>
              <p>{errors.password && "Le mot de passe doit faire minimum 8 caractères"}</p>

              <input type="submit" value="CONNEXION" className="submit" />
            </div>
          </form>}
        </div>
    )
}
export default SignIn;