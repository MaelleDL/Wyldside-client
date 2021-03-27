import React from "react";
import { Link } from "react-router-dom";

const Card = ({ offer }) => {
  return (
    <div className="card">
      <div>
        <h2 className="title">{offer.name}</h2>
      </div>
      <img src={offer.image_path} alt="img" width="100%" />
      <p>{offer.description}</p>
      <div className="button-div">
      <Link to={`/Nos_Offres/${offer.id}`}>
        <button type="button">AFFICHER</button>
      </Link>
      </div>
    </div>
  );
};
export default Card;
