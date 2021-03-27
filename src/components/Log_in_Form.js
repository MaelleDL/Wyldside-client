import React from 'react';
import { Redirect } from 'react-router';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthService from '../services/auth.service'

const Logschema=yup.object().shape({
    mail:yup.string().required(),
    password:yup.string().min(8).required()
    })

const SignIn=({connected, setConnected})=> {

    const {register, handleSubmit, errors}=useForm({
        resolver:yupResolver(Logschema)
      });
      
      const handleLog=(data)=>{
        AuthService.login(data)
        .then(response=>{
          console.log(response);
          setConnected(true);
        })
      } 
    return(
        <div className="big-card big-card-form"> 
        {connected===true? <Redirect to="/Espace_perso"/>:
          <form onSubmit={handleSubmit(handleLog)} >
            <h2 className="title-Green">CONNEXION</h2>
            <div className="Form Connect">

              <div className="sign-in-group">
              <label htmlFor="mail">IDENTIFIANT (mail)</label>
              <input type="text" name="mail" id="mail" ref={register}/>
              <p>{errors.usermail && "L'identifiant est requis"}</p></div>

              <div className="sign-in-group">
              <label htmlFor="password">MOT DE PASSE</label>
              <input type="password" name="password" id="password" ref={register}/>
              <p>{errors.password && "Le mot de passe doit faire minimum 8 caractères"}</p></div>
            </div>
            <div className="button-div">
            <input type="submit" value="CONNEXION" className="submit" />
            </div>
          </form>
        }
        </div>
    )
}
export default SignIn;