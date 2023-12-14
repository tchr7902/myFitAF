const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.JAWSDB_CONNECTION_STRING, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: 'Amazon RDS',
  },
});

module.exports = sequelize;
