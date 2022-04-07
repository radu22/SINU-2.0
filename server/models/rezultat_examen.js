'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rezultat_examen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rezultat_examen.belongsTo(models.student, {

      })
      rezultat_examen.belongsTo(models.examen, {

      })
    }
  }
  rezultat_examen.init({
    nota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rezultat_examen',
  });
  return rezultat_examen;
};