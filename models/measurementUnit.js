const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const MeasurementUnit = sequelize.define(
  'measurementUnits',
  {
    measureId: {
      type: Sequelize.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      field: 'measureId',
      autoIncrement: true,
    },
    shortName: {
      type: Sequelize.STRING(3),
      allowNull: false,
      unique: true,
      field: 'shortName',
    },
    longName: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
      field: 'longName',
    },
    category: {
      type: Sequelize.STRING(45),
      allowNull: false,
      field: 'category',
    },
    measureSystem: {
      type: Sequelize.STRING(135),
      allowNull: false,
      field: 'measureSystem',
    },
  },
  { timestamps: false },
);

module.exports = MeasurementUnit;
