const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Photo = db.define(
  'photos',
  {
    idfoods: { type: DataTypes.STRING },
    path: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Photo;
