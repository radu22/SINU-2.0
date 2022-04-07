'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('facultates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nume_facultate: {
        type: Sequelize.STRING
      },
      nume_decan: {
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
    await queryInterface.dropTable('facultates');
  }
};