import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {

  const { utilisateur, chargement } = useContext(AuthContext);
    if(chargement){
        return null;
    }
    if (!utilisateur) {

        return <Navigate to="/connexion" replace />;

    }

  return children;

}

export default ProtectedRoute;