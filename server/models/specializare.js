'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class specializare extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // specializare.belongsTo(models.facultate, {
      //
      // })
      // specializare.hasMany(models.student, {
      //
      // })
      // specializare.hasMany(models.materie, {
      //
      // })
    }
  }
  specializare.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    nume_specializare: DataTypes.STRING,
    numar_ani: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'specializare',
  });
  return specializare;
};