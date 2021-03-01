import React from "react";
import Logo from "../Img/logo.png";
import Menu from "../Img/List.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <img className="logo, logo-mobile" src={Logo} alt="Logo/accueil" />
      <div className="dropdown">
        <img src={Menu} className="boutonmenu" alt="Menu" />
        <div className="dropdown-child">
          <Link to="/Qui_sommes_nous">
            <h4 className="menu-items title">QUI SOMMES NOUS?</h4>
          </Link>
          <div className="grey">
            <Link to="/Nos_Offres">
              <h4 className="menu-items title">NOS OFFRES</h4>
            </Link>
          </div>
          {/* <Link to="/Actualites">
            <h4 className="menu-items title">NOS ACTUALITES</h4>
          </Link> */}
          <Link to="/" id="Logo_desktop">
            <img className="logo, logo-desktop" src={Logo} alt="Logo/accueil" />
          </Link>
          {/* <div className="grey">
            <Link to="/Planning">
              <h4 className="menu-items title">PLANNING REGULIER</h4>
            </Link>
          </div> */}
          <Link to="/Identification">
            <h4 className="menu-items title">ESPACE PERSONNEL</h4>
          </Link>
          <div className="grey">
            <Link to="/Contacts">
              <h4 className="menu-items title">CONTACTS</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
