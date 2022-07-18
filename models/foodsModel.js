const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Food = db.define('foods', {
  namamakanan: { type: DataTypes.STRING, allowNull: false },
  daerah: { type: DataTypes.STRING },
  deskripsi: { type: DataTypes.STRING },
});

module.exports = Food;
