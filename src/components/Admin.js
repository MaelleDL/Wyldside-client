import Wrench from "../Img/icon/Wrench.png";
import Users from "../Img/icon/Users.png"
import { Link } from "react-router-dom";

const Admin=()=> {
    return(
        <div className="admin">
   
            <Link to="/Gestion/Cours" className="card">
                <img src={Wrench} alt="tool"/>
                <h2 className="subtitle">Gérer le contenu</h2>
            </Link>
            <Link to="/Gestion/Users" className="card">
                <img src={Users} alt="users"/>
                <h2 className="subtitle">Gestion Utilisateurs</h2>
            </Link>
                
        </div>
    )
}

export default Admin;