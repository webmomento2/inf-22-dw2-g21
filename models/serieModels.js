const Sequelize = require('sequelize');
const database = require('../database/db');
const User = require('./userModels');


const Serie = database.define('serie', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING, //(200) posso colocar limite
        allowNull: false,
    },

    ano: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    genero: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }

});


Serie.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Serie);

//Serie.sync();
module.exports = Serie;