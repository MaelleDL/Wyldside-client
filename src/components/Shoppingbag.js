import React, { useState, useEffect } from "react";


function ShoppingBag() {

  const [cart, setCart]=useState([]);

  useEffect(()=>{
    getLocalCart();
    // eslint-disable-next-line
  },[]);

  useEffect(()=>{
    saveNewCart()
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
        <p>{cartOffer.price}</p>
        <button onClick={() => deleteHandler(cartOffer)}>Retirer l'offre</button>
      </div>))}
      <button>Payer</button>
    </div>
  );
}

export default ShoppingBag;
