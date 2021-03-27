import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Avatar from "../Img/icon/UserCircle.png";
import ShoppingBag from "./Shoppingbag";
import Order from "./Order";
import authHeader from '../services/auth-header';



const Visitor=({connected})=> {
    const [user, setUser]=useState([]);
    const URL=process.env.REACT_APP_URL

    useEffect(() => {
        GetUser()
        
    }, [])

    const GetUser=()=>{
        Axios.get(`${URL}/auth/user`,{ headers: authHeader()})
        .then(res=>{
            setUser(res.data);
        })
    }

    return(
        <div className="visitor">
            <div className="visitor-left">
         <div className="card visitor-card">
             <img src={Avatar} alt="Avatar"/>
             <div className="indiv">
                 <div className="groups-i">
                     <h3 className="title">NOM</h3>
                     <h3 className="title">PRENOM</h3>
                 </div>
                 <div className="groups-i">
                     <p>{user.surname}</p>
                     <p>{user.name}</p>
                 </div>
             </div>
               <h3 className="title">MAIL</h3>
               <p>{user.mail}</p>
               <h3 className="title">TELEPHONE</h3>
               <p>{user.phone}</p>
               <button>Modifier</button>
            </div>
            </div>
            <div className="visitor-right">
              <ShoppingBag connected={connected}/>
              <Order user={user}/>
     </div> 
        </div>
    )
}

export default Visitor;