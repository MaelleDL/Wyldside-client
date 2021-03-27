import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'; 
import authHeader from '../services/auth-header'

const ShoppingBag=({connected})=> {

  const [cart, setCart]=useState([]);
  const [total, setTotal]=useState("");
  const URL=process.env.REACT_APP_URL;

  useEffect(()=>{
    getLocalCart();
    getTotal();
    // eslint-disable-next-line
  },[]);

  useEffect(()=>{
    saveNewCart();
    getTotal();
  },[cart])

  const getLocalCart = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem("cart"));
      setCart(cartLocal);
    }
  };

  const saveNewCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const deleteHandler = (offer) => {
      setCart(cart.filter((el) => el.id !== offer.id))
    };

  const getTotal= ()=>{
    let i=0;
    let j=0
    for (i = 0; i < cart.length; i++){
      j+=cart[i].price
    }
    setTotal(j)
  }

  const handleValidation=()=>{ 
    const order={ 
      Offers:cart
    }
    Axios.post(`${URL}/order/new`, order, {headers: authHeader()})
        .then(res=>{
          alert(res.data.message);
          setCart([]);
          localStorage.removeItem("cart");
        }) 
  }


  return (
    <div className="big-card shoppingbag">
      <h2 className="subtitle">Panier</h2>
      {cart.length === 0 && <p>Il n'y a aucune offre dans votre panier.</p>}
      {cart.map((cartOffer) => (
      <div className="shop-offer">
        <img src={cartOffer.Course.image_path} alt="shop-offer" width="10%" />
        <h3>{cartOffer.Course.name}</h3>
        <p>{cartOffer.Forfait.duration}</p>
        <p>{cartOffer.Section.name}</p>
        <p>{cartOffer.price} €</p>
        <button onClick={() => deleteHandler(cartOffer)}>Retirer l'offre</button>
      </div>))}
      <div className="bottom-cart">
      <h4 className='total'>
        TOTAL= {total} €
      </h4>
      
        {connected===true? <button onClick={handleValidation}>Valider ma commande</button>:<Link to={`/Identification`}><button>se connecter pour valider</button></Link>}
        
          
      </div>
    </div>
  );
}

export default ShoppingBag;
