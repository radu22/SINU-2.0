'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      profesor.belongsTo(models.user, {

      })
      profesor.hasMany(models.materie, {

      })
    }
  }
  profesor.init({
    nume: DataTypes.STRING,
    prenume: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'profesor',
  });
  return profesor;
};