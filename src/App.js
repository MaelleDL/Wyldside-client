import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header";
import WhoWeAre from "./pages/PRESENTATION";
import OffersList from "./pages/OFFERSLIST";
import Connexion from "./pages/CONNEXION";
import Contacts from "./pages/CONTACTS";
import Accueil from "./pages/ACCUEIL"
import OneOffer from "./components/OneOffer";
import ShoppingBag from "./components/Shoppingbag";
import PersonalSpace from "./pages/ESPACE-PERSO";
import CourseGestion from "./components/CourseGestion";
import UserGestion from "./components/UserGestion";


const App=()=> {
  const [connected, setConnected]=useState(false);
  return (
    <Router>
      <div className="App">
        <Header connected={connected} setConnected={setConnected} />
        <div id="main">
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/Qui_sommes_nous" component={WhoWeAre} />
            <Route path="/Nos_Offres" exact component={OffersList} />
            <Route path="/Nos_Offres/:id" component={OneOffer}/>
            <Route path="/Identification">
              <Connexion connected={connected} setConnected={setConnected}
              />
            </Route>
            <Route path="/Contacts" component={Contacts} />
            <Route path="/Shoppingbag">
              <ShoppingBag connected={connected}/>
              </Route>
            <Route path="/Espace_perso">
              <PersonalSpace connected={connected}/>
            </Route>
            <Route path="/Gestion/Cours" component={CourseGestion}/>
            <Route path="/Gestion/Users" component={UserGestion}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
