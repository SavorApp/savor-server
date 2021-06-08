"use strict";

const { Sequelize } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Filter", {
      user_id: {
        type: Sequelize.STRING,
        foreignKey: true,
        references: {
          model: "User",
          key: "_id",
        },
      },
      smartFilter: {
        type: Sequelize.BOOLEAN,
      },
      dishType: {
        type: Sequelize.STRING,
      },
      cuisine: {
        type: Sequelize.STRING,
      },
      vegetarian: {
        type: Sequelize.BOOLEAN,
      },
      vegan: {
        type: Sequelize.BOOLEAN,
      },
      glutenFree: {
        type: Sequelize.BOOLEAN,
      },
      dairyFree: {
        type: Sequelize.BOOLEAN,
      },
      readyInMinutes: {
        type: Sequelize.INTEGER,
      },
      servings: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async ({ context: queryInterface }) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Filter");
  },
};
