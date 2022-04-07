'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orars', {
      id_materie: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_grupa: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ziua_ora_sg1: {
        type: Sequelize.DATE
      },
      ziua_ora_sg2: {
        type: Sequelize.DATE
      },
      recurenta: {
        type: Sequelize.INTEGER
      },
      sala: {
        type: Sequelize.STRING
      },
      tip: {
        type: Sequelize.STRING
      },
      optional: {
        type: Sequelize.STRING
      },
      durata: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('orars');
  }
};