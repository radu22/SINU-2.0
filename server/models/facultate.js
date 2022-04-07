'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facultate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      facultate.hasMany(models.specializare,  {

      })
    }
  }
  facultate.init({
    nume_facultate: DataTypes.STRING,
    nume_decan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'facultate',
  });
  return facultate;
};