const {Datatypes} = require("sequelize");
const Sequelize = require("../config/db.js")

const User = Sequelize.define("User",{
    id:{type: Datatypes.INTEGER},
    nombre:{type: Datatypes.STRING},
    email:{type: Datatypes.STRING,allowNull: false, unique: true, validate:{isEmail: true,}},
    password:{type: Datatypes.STRING, allowNull: false,},
    rol:{type: Datatypes.INTEGER, allNull:false,}, //1:CLIENTE 2:EMPLEADO 3:ADMINISTRADOR 
},
{
    timestamps: false,
    paranoid: true, // Habilita soft delete con deletedAt
});

module.exports = {User};