import React from 'react';
import { Redirect } from 'react-router';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthService from '../services/auth.service'


const Signschema=yup.object().shape({
    surname:yup.string().required(),
    name:yup.string().required(),
    mail:yup.string().email().required(),
    phone:yup.string().required(),
    password:yup.string().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null]),
    })
  

    function SignIn({connected, setConnected}) {
    const {register, handleSubmit, errors}=useForm({
        resolver:yupResolver(Signschema)
      });
      
      
      const handleLog=(data)=>{
        AuthService.register(data)
        .then(response=>{
          console.log(response);
          setConnected(true)
        })
      }

    return(<div className="big-card big-card-form">
      {connected===true? <Redirect to="/Espace_perso"/>:
          <form onSubmit={handleSubmit(handleLog)}>
            <h2 className="title-Green">PREMIERE INSCRIPTION</h2>
            <div className="Form">

              <div className="column-form column-1-form">

                <label htmlFor="surname">NOM</label>
                <input type="text" name="surname" id="surname" ref={register}/>
                <p>{errors.Surname && "Le nom est requis"}</p>

                <label htmlFor="name">PRENOM</label>
                <input type="text" name="name" id="name" ref={register}/>
                <p>{errors.Name && "Le prénom est requis"}</p>

                <label htmlFor="mail">MAIL</label>
                <input type="text" name="mail" id="mail" ref={register}/>
                <p>{errors.Mail && "L'adresse mail est requis"}</p>

              </div>

              <div className="column-form">

                <label htmlFor="phone">TELEPHONE</label>
                <input type="text" name="phone" id="phone" ref={register}/>
                <p>{errors.Phone && "Le numéro de Téléphone est requis"}</p>

                <label htmlFor="password">MOT DE PASSE</label>
                <input type="password" name="password" id="password" ref={register}/>
                <p>{errors.password && "Le mot de passe doit faire minimum 8 caractères"}</p>

                <label htmlFor="confirmPassword">MOT DE PASSE (ressaisi)</label>
                <input type="password" name="confirmPassword" id="confirmPassword" ref={register}/>
                <p>{errors.confirmPassword && "Le mot de passe doit être identique au premier."}</p>
              </div>

            </div>
            <div className="button-div">
            <input type="submit" value="INSCRIPTION" className="submit" />
            </div>
          </form>
        }
        </div>
        );
    
    }
    export default SignIn;