import React from "react";
import IMG1 from "../../Img/NB/PNG/ACRO-SQUARE-NB.png";
import IMG2 from "../../Img/NB/PNG/CHEER-SQUARE-NB.png";
import IMG3 from "../../Img/NB/PNG/DANSE-SQUARE-NB.png";
import IMG4 from "../../Img/NB/PNG/YOGA2-SQUARE-NB.png";

const Carrousel = () => {
  return (

      <div className="carrousel">
        <img src={IMG1} alt="" className="pic" />
        <img src={IMG2} alt="" className="pic" />
        <img src={IMG3} alt="" className="pic" />
        <img src={IMG4} alt="" className="pic" />
      </div>

  );
};
export default Carrousel;
