const Sequelize = require('sequelize');
const database = require('../database/db');
const User = require('./userModels');

const Filme = database.define('filme', {
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


Filme.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Filme);

//Filme.sync();
module.exports = Filme;