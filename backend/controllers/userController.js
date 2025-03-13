const User = require('../models/UserModel.js')
const bcrypt = require('bcrypt')

//CRAER USUARIOS 
exports.createUser = async (req, res) => {
    const {nombre,email, password, rol} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUsuario = await User.create({nombre, email, password: hashedPassword, rol });
        res.status(201).json({message: "Usuario creado correctamente", usuario: nuevoUsuario}); 
    }catch(error){
        res.status(500).json({message: "Error al crear el usuario"});
    }
}

//ELIMINAR USUARIOS 
exports.deleteUser = async (req, res) =>{
    try{
        const{id } = req.params;
        await User.destroy({where:{id}});
        res.status(200).json({message: "Usuario eliminado correctamente"})
    }catch(error){
        res.status(500).json({message: "Error al eliminar el usuario"});
    }
}

//ACTUALIZAR USUARIOS 
exports.updateUser = async (req, res) =>{
    const {id} = req.params;
    const {nombre, email, password, rol} = req.body;
    try{
        const usuario = await User.findByPk(id);
        if (!usuario){ return res.status(404).json({message: "Usuario no encotrado"});}

        let newPassword = usuario.password;
        if(password){
            newPassword = await bcrypt.hash(password, 10);
        }

        await usuario.update({
            nombre: nombre || usuario.nombre,
            email: email || usuario.email,
            password: newPassword,
            rol: rol || usuario.rol,
        });
        res.status(200).json({message: "Usuario actualizado correctamente", usuario});
    }catch(error){
        res.status(500).json({message: "Error al actualizar el usuario"});
    }
}

//CONSULTAR USUARIOS 
exports.getAllUsers = async (req, res) => {
 try{
    const usuarios = await User.findAll();
    res.status(200).json(usuarios);
 }catch(error){
    res.status(500).json({message: "Error al consultar los usuarios"})
 }
}

//CONSULTAT POR PARAMETROS 
exports.getUser = async (req, res) => {
    try{
        const usuarios = await User.findAll({where: req.query});

        if (usuarios.length === 0){
            return res.status(404).json({message: "Usuario no Encontrado"})
        }
        res.status(200).json(usuarios);
    }catch(error){
        res.status(500).json({message: "Error al consultar los usuarios"})
    }
}