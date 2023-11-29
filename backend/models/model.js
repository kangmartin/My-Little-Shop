const { Sequelize, DataTypes } = require('sequelize');

const database = 'mylittleshop';
const username = 'root';
const password = '';
const host = 'localhost';


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