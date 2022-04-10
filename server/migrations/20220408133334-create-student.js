'use strict';
const {DataTypes} = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      nume: {
        type: Sequelize.STRING
      },
      prenume: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefon: {
        type: Sequelize.STRING
      },
      data_nasterii: {
        type: Sequelize.DATE
      },
      grupa: {
        type: Sequelize.INTEGER
      },
      limba: {
        type: Sequelize.STRING
      },
      nr_catalog: {
        type: Sequelize.INTEGER
      },
      cnp: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};