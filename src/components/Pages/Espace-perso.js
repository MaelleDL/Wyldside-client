import Avatar from "../../Img/UserCircle.png";
import Test from "../../Img/NB/ACRO-SQUARE-NB.png"

function PersonalSpace() {
    return (
      <div className="personal-space">
          <div className="card">
            <img src={Avatar} alt="Avatar"/>
            <div className="indiv">
                <div className="groups-i">
                    <h3 className="title">NOM</h3>
                    <h3 className="title">PRENOM</h3>
                </div>
                <div className="groups-i">
                    <p>Daniel</p>
                    <p>Maëlle</p>
                </div>
            </div>
              <h3 className="title">MAIL</h3>
              <p>maelledaniel@live.fr</p>
              <h3 className="title">ADRESSE</h3>
              <p>42 avenue de l'Harmonie</p>
              <p>44300 NANTES</p>
              <h3 className="title">SECTIONS</h3>
              <p>Cheerleading</p>
              <button>Modifier</button>
          </div>
          <div className="right-section-pers">
          <div className="card">
          <h3 className="title">MON PANIER</h3>
          <div className="shop-offer">
            <img src={Test} alt="phototest" width="10%" />
            <h3>Yoga</h3>
            <p>forfait</p>
            <p>section</p>
            <p>320€</p>
            </div>
            <div className="shop-offer">
            <img src={Test} alt="phototest" width="10%" />
            <h3>Yoga</h3>
            <p>forfait</p>
            <p>section</p>
            <p>320€</p>
            </div>
          </div>
          <div className="card">
          <h3 className="title">MES COURS</h3>
          <div className="shop-offer">
            <img src={Test} alt="phototest" width="10%" />
            <h3>Yoga</h3>
            <p>forfait</p>
            <p>section</p>
            <p>320€</p>
            </div>
          </div>
          </div>
      </div>
    );
  }
  
  export default PersonalSpace;
  