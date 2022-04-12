'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      materie.belongsTo(models.specializare, {

      })
      materie.belongsTo(models.profesor, {

      })
      materie.hasMany(models.examen, {

      })
    }
  }
  materie.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    nume: DataTypes.STRING,
    an: DataTypes.INTEGER,
    numar_credite: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'materie',
  });
  return materie;
};