const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.JAWSDB_NAME, process.env.JAWSDB_USER, process.env.JAWSDB_PASSWORD, {
  host: process.env.JAWSDB_HOST,
  port: process.env.JAWSDB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    ssl: 'Amazon RDS',
  },
});

// const sequelize = new Sequelize(process.env.JAWSDB_CONNECTION_STRING);

module.exports = sequelize;


module.exports = sequelize;
