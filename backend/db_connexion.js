const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = { sequelize };