const sequelize = require("../config/db.js");
const User = require("./UserModel.js");

sequelize.sync({ force: false})
.then(() =>{console.log("base de datos sincronizada con exito")})
.catch(()=> {console.error("error al sincronizar:",error)});

module.export ={sequelize,User};

