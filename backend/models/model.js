require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;


const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

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