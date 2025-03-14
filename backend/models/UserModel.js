const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

class User extends Model {
 
    // Método para verificar si el usuario es administrador
  esAdmin() {return this.rol === 3;}
  // Método para mostrar información segura del usuario
  getProfile() {
    return {
      id: this.id,
      nombre: this.nombre,
      email: this.email,
      rol: this.rol,
    };
  }
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    password: { type: DataTypes.STRING, allowNull: false }, // Debe encriptarse antes de guardarse
    rol: { type: DataTypes.INTEGER, allowNull: false }, // 1: CLIENTE, 2: EMPLEADO, 3: ADMINISTRADOR
  },
  {
    sequelize,
    modelName: "User",
    timestamps: false,
    paranoid: true, // Habilita soft delete con deletedAt
  }
);

module.exports = User;
