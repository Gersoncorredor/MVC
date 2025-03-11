const {Sequelize} = require("sequelize");
require("dotenv").config();

const Sequelize = new Sequelize (
    process.env.DB.NAME,
    process.env.DB.USER,
    process.env.DB.PASSWORD,
    process.env.DB.PORT,
    {
        host: process.env.DB.HOST,
        dialect: "mysql",
        logging: false,
    }
)

module.exports = {Sequelize};
