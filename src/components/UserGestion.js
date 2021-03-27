import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import authHeader from '../services/auth-header';

const UserGestion=()=> {

    const [users, setUsers]=useState([]);
    const [count, setCount]=useState("");
    const URL=process.env.REACT_APP_URL;
    
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers=()=>{
        Axios.get(`${URL}/auth/users`,{ headers: authHeader()})
        .then(res=>{
            setUsers(res.data.users);
            setCount(res.data.count);
        })
    }

    return(
        <div className="big-card gestion-card">
            <h2 className="title-Green">USERS GESTION</h2>
            {users.map(user=>(
                <div key={user.id} className="shop-offer" >
                    <p>{user.surname} {user.name}</p>
                    <p>{user.phone}</p>
                    <p>{user.mail}</p>
                    <p>{user.role}</p>
                    
                </div>
            ))}
        </div>
    )
}

export default UserGestion;