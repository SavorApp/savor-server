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
    await queryInterface.createTable("Recipe", {
      user_id: {
        type: Sequelize.STRING,
        foreignKey: true,
        onDelete: "cascade",
        onUpdate: "cascade",
        references: {
          model: "User",
          key: "_id",
        },
      },
      recipe_id: {
        type: Sequelize.STRING,
        primaryKey: true,
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

  down: async ({ context: queryInterface }) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Recipe");
  },
};
