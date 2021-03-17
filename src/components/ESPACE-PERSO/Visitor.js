import Avatar from "../../Img/icon/UserCircle.png";


function Visitor({user}) {

  const handleLogout = () => {
    localStorage.clear();
  };
    return(
        <div className="visitor">
          <button onClick={handleLogout}>logout</button>
        <div className="card">
            <img src={Avatar} alt="Avatar"/>
            <div className="indiv">
                <div className="groups-i">
                    <h3 className="title">NOM</h3>
                    <h3 className="title">PRENOM</h3>
                </div>
                <div className="groups-i">
                    <p>{user.surname}</p>
                    <p>{user.name}</p>
                </div>
            </div>
              <h3 className="title">MAIL</h3>
              <p>{user.mail}</p>
              <h3 className="title">TELEPHONE</h3>
              <p>{user.phone}</p>
              <button>Modifier</button>
           </div>
           
          {/* <div className="right-section-pers">
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
          </div> */}
        </div>
    )
}

export default Visitor;