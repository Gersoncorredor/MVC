import { Navigate } from "react-router-dom";

const protectedRoute = ({children}) =>{
    const token = localStorage.getItem("authToken");
    
    return token ? children : <Navigate to="/login"/>;
}

module.exports = protectedRoute;


/* 
EJEMPLO DE USSO
    <Routes>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
*/