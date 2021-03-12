import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../App.css";

function OffersList() {
  useEffect(() => {
    fetchOffers();
  }, []);

  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    axios.get(`http://localhost:3000/course`)
      .then(res => {
        const response = res.data;
        setOffers(response);
      })
  };
  return (
    <div id="pres">
      {offers.map((offer) => (
        <div className="card" key={offer.id}>
          <div>
            <h2 className="title">{offer.name}</h2>
          </div>
          <img src={offer.image_path} alt="img" width="100%" />
          <p>{offer.description}</p>
          <Link to={`/Nos_Offres/${offer.id}`}>
            <button type="button">AFFICHER</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default OffersList;
