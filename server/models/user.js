'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  user.init({
    cnp: {type: DataTypes.INTEGER, primaryKey: true},
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
    role: {type: DataTypes.STRING, validate: {isIn: [['STUDENT','PROFESOR','ADMIN']]}}
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};