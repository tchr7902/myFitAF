require('dotenv').config();
console.log('Connection string:', process.env.JAWSDB_CONNECTION_STRING);

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.JAWSDB_CONNECTION_STRING, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      ca: process.env.SSL_CA,
    },
  },
});

module.exports = sequelize;
