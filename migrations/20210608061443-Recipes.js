"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable("Recipes", {
      recipe_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
      },
      cuisine: {
        type: Sequelize.STRING,
      },
      dishType: {
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
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      isSavored: {
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable("Recipes");
  },
};
