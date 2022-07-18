const sequilize = require('sequelize');
const getConnect = require('./config.json')['development'];

const db = new sequilize(getConnect.database, getConnect.username, getConnect.password, {
  dialect: getConnect.dialect,
});

db.sync({});

module.exports = db;
