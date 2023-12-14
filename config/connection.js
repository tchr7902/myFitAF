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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  
module.exports = sequelize;
