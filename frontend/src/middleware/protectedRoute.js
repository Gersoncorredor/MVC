import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children, allowedRoles}) =>{
    const response = JSON.parse(localStorage.getItem("MVC_authToken")) || "";
    
    if (!response.token){
        return <Navigate to="/"/>;
    }
    if (allowedRoles && !allowedRoles.includes(response.rol)){
        return <Navigate to="/"/>;
    }
    
    return children;
}

export default ProtectedRoute;


