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
    toJSON() {
      return { ...this.get(), id: undefined};
    }

    static associate(models) {
      profesor.hasMany(models.materie, {

      })
    }
  }
  profesor.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    nume: DataTypes.STRING,
    prenume: DataTypes.STRING,
    cnp: {
      type: DataTypes.INTEGER,
      unique:true,
      allowNull: false
    },
    rol: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'profesor',
  });
  return profesor;
};