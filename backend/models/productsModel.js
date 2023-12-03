require('dotenv').config();
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db_connexion');

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
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    actual_price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = { Product, sequelize };