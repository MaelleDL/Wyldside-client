import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "../components/card"

const OffersList=()=> {
  useEffect(() => {
    fetchOffers();
  }, []);

  const [offers, setOffers] = useState([]);
  const URL=process.env.REACT_APP_URL

  const fetchOffers = () => {
    axios.get(`${URL}/course`)
      .then(res => {
        const response = res.data;
        console.log(response);
        
        setOffers(response);
      })
  };
  return (
    <div id="pres">
      {offers.map((offer) => (
        <Card offer={offer} key={offer.id}/>
      ))}
    </div>
  );
}

export default OffersList;
