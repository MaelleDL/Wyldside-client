import React from "react";
import { Link } from "react-router-dom";

const Card = ({ offer }) => {
  return (
    <div className="card">
      <div>
        <h2 className="title">{offer.Name}</h2>
      </div>
      <img src={offer.Image_path} alt="img" width="100%" />
      <p>{offer.Description}</p>
      <Link to={`/Nos_Offres/${offer.id}`}>
        <button type="button">AFFICHER</button>
      </Link>
    </div>
  );
};
export default Card;
