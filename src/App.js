import React from "react";
import "./App.css";
import Header from "./components/header";
import WhoWeAre from "./components/PRESENTATION";
import OffersList from "./components/OFFERS/OffersList";
import Connexion from "./components/ESPACE-PERSO/CONNEXION/Connexion";
import Contacts from "./components/CONTACTS";
import Carrousel from "./components/ACCUEIL/carrousel";
import OneOffer from "./components/OFFERS/OneOffer";
import ShoppingBag from "./components/Shoppingbag";
import PersonalSpace from "./components/ESPACE-PERSO/ESPACE-PERSO";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div id="main">
          <Switch>
            <Route path="/" exact component={Carrousel} />
            <Route path="/Qui_sommes_nous" component={WhoWeAre} />
            <Route path="/Nos_Offres" exact component={OffersList} />
            <Route path="/Nos_Offres/:id" component={OneOffer} />
            <Route path="/Identification" component={Connexion} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/Shoppingbag" component={ShoppingBag} />
            <Route path="/Espace_perso" exact component={PersonalSpace} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
