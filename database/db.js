const Sequelize = require('sequelize');
const config = require('../services/configService');
//const mysql = require('mysql2/promise');

const sequelize = new Sequelize(`${config.DB_DATABASE}`, `${config.DB_USERNAME}`, `${config.DB_PASSWORD}`, {
    dialect: `${config.DB_CONNECTION}`,
    host: `${config.DB_HOST}`,
    port: `${config.DB_PORT}`
});

//código para usar sem o Docker >> cria o schema na BD;
/*mysql.createConnection({  
    user     : config.DB_USERNAME,
    password : config.DB_PASSWORD
}).then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${config.DB_DATABASE};`);
});
*/

module.exports = sequelize;