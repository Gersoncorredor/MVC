const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No autorizado, token faltante o incorrecto" });
    }

    try{
        const token = authHeader.split(" ")[1]
        // DESCIFRAR TOKEN
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        res.status(401).json({message: "token invalido"})
    }
}

const checkRole = (...rolesPermitidos) => {
    return (req, res, next) => {
        if (!rolesPermitidos.includes(req.user.rol)){
            return res.status(403).json({message: "Acceso denegado"});
        }
        next();
    };
};

module.exports = {verifyToken, checkRole};