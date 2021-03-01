import React, { useState, useEffect } from "react";
import Card from "../card";
import "../../App.css";

function OffersList() {
  useEffect(() => {
    fetchOffers();
  }, []);

  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    const response = await fetch("https://127.0.0.1:8000/course");
    const offers = await response.json();
    console.log(offers);
    setOffers(offers);
  };
  return (
    <div id="pres">
      {offers.map((offer) => (
        <Card offer={offer} />
      ))}
    </div>
  );
}

export default OffersList;
