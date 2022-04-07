'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.belongsTo(models.user, {

      })
      student.belongsTo(models.specializare, {

      })
      student.hasMany(models.rezultat_examen, {

      })
    }
  }
  student.init({
    nume: DataTypes.STRING,
    prenume: DataTypes.STRING,
    email: DataTypes.STRING,
    telefon: DataTypes.STRING,
    data_nasterii: DataTypes.DATE,
    id_specializare: DataTypes.INTEGER,
    grupa: DataTypes.INTEGER,
    limba: DataTypes.STRING,
    nr_catalog: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};