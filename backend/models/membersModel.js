require('dotenv').config();
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db_connexion');

const Member = sequelize.define('member', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isBan: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});





module.exports = { Member, sequelize };
