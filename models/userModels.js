const Sequelize = require('sequelize');
const database = require('../database/db');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    apiKey: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },

    username: {
        type: Sequelize.STRING, //(200) posso colocar limite
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

/*
User.hasMany(Filme, {
    foreignKey: 'userId'
});

User.hasMany(Serie, {
    foreignKey: 'userId'
});

User.hasMany(Livro, {
    foreignKey: 'userId'
});*/

//User.sync();

module.exports = User;