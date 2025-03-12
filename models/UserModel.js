const {DataTypes} = require("sequelize");
const sequelize = require("../config/db.js")

const User = sequelize.define("User",{
    id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,},
    nombre:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING,allowNull: false, unique: true, validate:{isEmail: true,}},
    password:{type: DataTypes.STRING, allowNull: false,},
    rol:{type: DataTypes.INTEGER, allNull:false,}, //1:CLIENTE 2:EMPLEADO 3:ADMINISTRADOR 
},
{
    timestamps: false,
    paranoid: true, // Habilita soft delete con deletedAt
});

module.exports = User;