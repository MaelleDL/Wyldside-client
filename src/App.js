import React from "react";
import "./App.css";
import Header from "./components/header";
import WhoWeAre from "./components/Pages/Who_We_Are";
import OffersList from "./components/Pages/OffersList";
import Planning from "./components/Pages/Planning";
import Actualities from "./components/Pages/Actualities";
// import LogIn from "./components/Pages/LogIn";
import Contacts from "./components/Pages/Contacts";
import Carrousel from "./components/carrousel";
import OneOffer from "./components/OneOffer";
import ShoppingBag from "./components/Shoppingbag";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PROVISOIRE
import PersonalSpace from "./components/Pages/Espace-perso";

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
            <Route path="/Planning" component={Planning} />
            <Route path="/Actualites" component={Actualities} />
            <Route path="/Identification" component={PersonalSpace} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/Nos_Offres/:id" component={OneOffer} />
            <Route path="/Shoppingbag" component={ShoppingBag} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
