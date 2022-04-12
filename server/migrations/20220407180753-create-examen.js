'use strict';
const {DataTypes} = require("sequelize/types");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('examens', {
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
      data: {
        type: Sequelize.DATE
      },
      forma_examinare: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('examens');
  }
};