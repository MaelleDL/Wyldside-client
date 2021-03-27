import React from "react";
import wyld from "../Img/Wyld.png";
import side from "../Img/side.png";
import cheer from "../Img/Backgrounds/cheer.png"

const Accueil = () => {
    return (
      <div className="accueil">
        <img id="back-accueil" src={cheer} alt=""/>       
        <div className="titre-accueil">
        <img id="wyld" src={wyld} alt="wyld"/>
        <img id="side" src={side} alt="side"/>
        </div>
  </div>
    );
  };

  export default Accueil;