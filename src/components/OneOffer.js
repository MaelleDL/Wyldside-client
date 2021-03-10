import React, { useState, useEffect } from "react";
import "../App.css";

function OneOffer({ match }) {
  useEffect(() => {
    fetchOffer();
    // eslint-disable-next-line
  }, []);

  const [offer, setOffer] = useState([]);
  const [sections, setSections] = useState([]);
  const [forfaits, setForfaits] = useState([]);

  const fetchOffer = async () => {
    const response = await fetch(
      `http://localhost:3000/course/${match.params.id}`
    );
    const RawOffer = await response.json();
    console.log(RawOffer.data);
    setOffer(RawOffer.data);
    setSections(RawOffer.data.Sections);
    setForfaits(RawOffer.data.Forfaits);
  };
  const [cartstorage, setCartstorage]=useState([]);
  const addToCart = (offer) => {
    getLocalCart()
    setCartstorage([...cartstorage, offer]);
    console.log(cartstorage);
    localStorage.setItem("cart", JSON.stringify(cartstorage));
  };
  const getLocalCart = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem("cart"));
      setCartstorage(cartLocal);
      // console.log(cart);
    }
  };
  return (
      <div className="One-offer-card big-card">
        <h2 className="title-Green">{offer.name}</h2>
        <img src={offer.image_path} alt="img" width="100%" />
        <div className="selects">
          <div id="sections">
            <label htmlFor="Sections">Section:</label>
            <select name="Sections" className="offer-select">
              {sections.map((sections) => (
                <option value={sections.name} key={sections.id}>
                  {sections.name}, {sections.age_range}
                </option>
              ))}
            </select>
          </div>
          <div id="forfaits">
            <label htmlFor="Forfait">Forfait:</label>
            <select name="Forfait" className="offer-select">
              {forfaits.map((forfait) => (
                <option value={forfait.duration} key={forfait.id}>
                  {forfait.duration}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p>{offer.description}</p>
        <div>
          <button onClick={() => addToCart(offer)}>
            Souscrire à cette offre
          </button>
        </div>
      </div>
  );
}

export default OneOffer;
