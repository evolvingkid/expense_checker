const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_CONNECTION, {
    logging: false,  
});


module.exports = { sequelize };
