import React, { useState, useEffect } from "react";



function ShoppingBag() {
  useEffect(()=>{
    getLocalCart();
    // eslint-disable-next-line
  },[]);
  const [cart, setCart]=useState([]);
  const getLocalCart = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem("cart"));
      setCart(cartLocal);
      console.log(cart);
    }
  };
  return (
    <div className="big-card shoppingbag">
      <h2 className="subtitle">ShoppingBag</h2>
      {cart.map((cartOffer) => (
      <div className="shop-offer" key={cartOffer.id}>
        <img src={cartOffer.image_path} alt="phototest" width="10%" />
        <p>2</p>
        <h3>{cartOffer.name}</h3>
        <p>forfait</p>
        <p>section</p>
        <p>320€</p>
        <div className="but">
          <button>-</button>
          <button>+</button>
        </div>
      </div>))}
      <button>Payer</button>
    </div>
  );
}

export default ShoppingBag;
