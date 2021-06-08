"use strict";
import { Model } from "sequelize";
import { createNamespaceExportDeclaration } from "typescript";

interface RecipeAttributes {
  recipe_id: number;
  title: string;
  cuisine: string;
  dishType: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  readyInMinutes: number;
  servings: number;
  ingredients: [string];
  isSavored: boolean;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Recipe extends Model<RecipeAttributes> implements RecipeAttributes {
    recipe_id!: number;
    title!: string;
    cuisine!: string;
    dishType!: string;
    vegetarian!: boolean;
    vegan!: boolean;
    glutenFree!: boolean;
    dairyFree!: boolean;
    readyInMinutes!: number;
    servings!: number;
    ingredients!: [string];
    isSavored!: boolean;
    createdAt!: Date;
    updatedAt!: Date;

    static associate(models: any) {
      // define association here
      Recipe.belongsTo(models.User, {
        foreignKey: {
          name: "_id",
        },
      });
    }
  }
  Recipe.init(
    {
      recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      cuisine: {
        type: DataTypes.STRING,
      },
      dishType: {
        type: DataTypes.STRING,
      },
      vegetarian: {
        type: DataTypes.BOOLEAN,
      },
      vegan: {
        type: DataTypes.BOOLEAN,
      },
      glutenFree: {
        type: DataTypes.BOOLEAN,
      },
      dairyFree: {
        type: DataTypes.BOOLEAN,
      },
      readyInMinutes: {
        type: DataTypes.INTEGER,
      },
      servings: {
        type: DataTypes.INTEGER,
      },
      ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      isSavored: {
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },

    {
      sequelize,
      modelName: "Recipe",
    }
  );
  return Recipe;
};
