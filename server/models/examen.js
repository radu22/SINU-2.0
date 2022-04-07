'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class examen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      examen.belongsTo(models.materie, {

      })
      examen.hasMany(models.rezultat_examen, {

      })
    }
  }
  examen.init({
    data: DataTypes.DATE,
    forma_examinare: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'examen',
  });
  return examen;
};