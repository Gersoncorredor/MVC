const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
require("dotenv").config();





// INICIAR SESION 
exports.login = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({where: {email} });
        if (!user){
            return res.status(404).json({message: "Correo o contraseña incorrectos"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(401).json({message: "Correo o contraseña incorrectos"});
        }
        const token = jwt.sign({id: user.id, rol: user.rol}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.json({token, rol: user.rol, id: user.id});
    }catch(error){
        res.status(500).json({message: "Error al iniciar sesion"});
    }
}

// REGISTRAR USUARIO
exports .resgister = async (req, res) => {
    const {nombre, email, password} = req.body;
    try{
    const userExist = await User.findOne({where: {email}});
    if (userExist){
        return res.status(400).json({message: "El correo ya esta en uso"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({nombre, email, password: hashedPassword, rol: 1});
    res.status(201).json({message: "Usuario registrado"});
    }catch(error){
        res.status(500).json({message: "Error al registrarse"});
    }
}
