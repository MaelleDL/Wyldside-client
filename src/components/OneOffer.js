import React, { useState, useEffect } from "react";
import "../App.css";

function OneOffer({ match }) {
  useEffect(() => {
    fetchOffer();
    // eslint-disable-next-line
  }, []);

  const [offer, setOffer] = useState([]);
  const [sections, setSections] = useState([]);
  const [packages, setPackages] = useState([]);

  const fetchOffer = async () => {
    const response = await fetch(
      `https://127.0.0.1:8000/course/${match.params.id}`
    );
    const offer = await response.json();
    console.log(offer);
    setOffer(offer);
    setSections(offer.sections);
    setPackages(offer.packages);
  };
  return (
    <div className="One-offer-card big-card">
      <h2 className="title-Green">{offer.Name}</h2>
      <img src={offer.Image_path} alt="img" width="100%" />
      <div className="selects">
        <div id="sections">
          <label for="Sections">Section:</label>
          <select name="Sections" className="offer-select">
            {sections.map((section) => (
              <option value={section.Name}>
                {section.Name}, {section.Age_range}
              </option>
            ))}
          </select>
        </div>
        <div id="packages">
          <label for="Package">Forfait:</label>
          <select name="Package" className="offer-select">
            {packages.map((Package) => (
              <option value={Package.Duration}>{Package.Duration}</option>
            ))}
          </select>
        </div>
      </div>
      <p>{offer.Description}</p>
    </div>
  );
}

export default OneOffer;
