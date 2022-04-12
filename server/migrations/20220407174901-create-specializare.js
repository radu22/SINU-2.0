'use strict';
const {DataTypes} = require("sequelize/types");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('specializares', {
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
      nume_specializare: {
        type: Sequelize.STRING
      },
      numar_ani: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('specializares');
  }
};