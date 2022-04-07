'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('specializares', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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