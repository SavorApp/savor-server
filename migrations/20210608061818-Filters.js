"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable("Filters", {
      user_id: {
        type: Sequelize.STRING,
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

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("Filters");
  },
};
