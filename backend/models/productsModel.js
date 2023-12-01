require('dotenv').config();
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db_connexion');

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    old_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    actual_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});





module.exports = { Product, sequelize };