import React, {useState} from "react";
import Logo from "../Img/logo.png";
import { Link } from "react-router-dom";
import {FiMenu, FiX} from 'react-icons/fi';
import ShoppingBag from "../Img/ShoppingBag.png";
import Instagram from "../Img/InstagramLogo.png";
import Facebook from "../Img/FacebookLogo.png";

const Header = () => {
  const [open, setOpen]=useState(false);
  return (
    <div id="header">
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={()=>setOpen(false)}>
          <img className="logo logo-mobile" src={Logo} alt="Logo/accueil"/>
          </Link>
          <div className="nav-icon" onClick={()=>setOpen(!open)}>{open?<FiX/>:<FiMenu/>}</div>
        <ul className={open? 'nav-links active' : 'nav-links'}>
          <li className="nav-item">
            <Link className="nav-link" to="/Qui_sommes_nous"onClick={()=>setOpen(false)}>
            <h4 className="menu-items title" >QUI SOMMES NOUS?</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Nos_Offres" className="nav-link grey" onClick={()=>setOpen(false)}>
              <h4 className="menu-items title" >NOS OFFRES</h4>
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/Identification" className="nav-link" onClick={()=>setOpen(false)}>
            <h4 className="menu-items title" >ESPACE PERSONNEL</h4>
          </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contacts" className="nav-link " onClick={()=>setOpen(false)}>
              <h4 className="menu-items title">CONTACTS</h4>
            </Link>
            </li>
          <li className="nav-item">
            <Link to="/ShoppingBag" className="nav-link" onClick={()=>setOpen(false)}>
            <img src={ShoppingBag} alt="Mon panier" />
            </Link>
          </li>
          <li className="Socials">
            <a href="https://www.instagram.com/wyldside.44/"><img src={Instagram} alt="Instagram"/></a>
            <a href="#"><img src={Facebook} alt="Facebook"/></a>
          </li>
        </ul>
      </nav>
      

                
          

            
          {/* <Link to="/Actualites">
            <h4 className="menu-items title">NOS ACTUALITES</h4>
          </Link> */}
          {/* <Link to="/" id="Logo_desktop">
            <img className="logo, logo-desktop" src={Logo} alt="Logo/accueil" />
          </Link> */}
          {/* <div className="grey">
            <Link to="/Planning">
              <h4 className="menu-items title">PLANNING REGULIER</h4>
            </Link>
          </div> */}
          

                 </div>  

          
  );
};
export default Header;
