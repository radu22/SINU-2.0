'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orar.init({
    id_materie: {type: DataTypes.INTEGER, primaryKey: true,},
    id_grupa: {type: DataTypes.INTEGER, primaryKey: true,},
    ziua_ora_sg1: DataTypes.DATE,
    ziua_ora_sg2: DataTypes.DATE,
    recurenta: DataTypes.INTEGER,
    sala: DataTypes.STRING,
    tip: DataTypes.STRING,
    optional: DataTypes.STRING,
    durata: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'orar',
  });
  return orar;
};