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
    toJSON() {
      return { ...this.get(), id: undefined};
    }

    static associate(models) {
      // student.belongsTo(models.specializare, {
      //
      // })
      // student.hasMany(models.rezultat_examen, {
      //
      // })

    }
  }
  student.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    nume: DataTypes.STRING,
    prenume: DataTypes.STRING,
    email: DataTypes.STRING,
    telefon: DataTypes.STRING,
    data_nasterii: DataTypes.DATE,
    an: DataTypes.INTEGER,
    grupa: DataTypes.INTEGER,
    limba: DataTypes.STRING,
    nr_catalog: DataTypes.INTEGER,
    specializareId: DataTypes.INTEGER,
    cnp: {
      type: DataTypes.INTEGER,
      unique:true,
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    modelName: 'student',
  });
  return student;
};