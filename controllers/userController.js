const User = require('../models/UserModel.js')
const bcrypt = require('bcrypt')

exports.createUser = async (req, res) => {
    const {nombre,email, password, rol} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUsuario = await bcrypt.create({nombre, email, password: hashedPassword, rol });
        res.status(201).json({message: "Usuario creado correctamente", usuario: nuevoUsuario}); 
    }catch(error){
        res.status(500).json({message: "Error al crear el usuario"});
    }
}

exports.deleteUser = async (req, res) =>{
    try{
        const{id } = req.params;
        await User.destroy({where:{id}});
        res.status(200).json({message: "Usuario eliminado correctamente"})
    }catch(error){
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({message: "Error al eliminar el usuario"});
    }
}