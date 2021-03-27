import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import authHeader from '../services/auth-header';


const Order=({user})=> {
    const URL=process.env.REACT_APP_URL
    const [orders, setOrders]=useState([]);
    useEffect(() => {
        getOrder()
    }, [user])

    const getOrder=()=>{
        Axios.get(`${URL}/order?UserId=${user.id}`,{ headers: authHeader()})
        .then(res=>{console.log(res.data);
           setOrders(res.data);
        })
    }

    return(
        <div className="order big-card">
            <h2 className="subtitle">Mes Abonnements</h2>
            {orders.map(order=>(
                <div key={order.id}>
                {order.Offers.map(offer=>(
                    <div className="shop-offer" key={offer.id}>
                        <img src={offer.Course.image_path} alt="shop-offer" width="10%" />
                        <p>{offer.Course.name}</p>
                        <p>{offer.Section.name}</p>
                        <p>{offer.Forfait.duration}</p>
                    </div>
                ))}
                </div>  
            ))}
        </div>

    )
}

export default Order;