"use strict";
import { Model } from "sequelize";

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
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Recipe extends Model<RecipeAttributes> implements RecipeAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // Recipe_id!: number;

    // image!: string;

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
    // cuisine!: string;
    // diet!: string;
    // static associate(models: any) {
    //   // define association here
    //   Recipe.belongsTo(models.User, {
    //     foreignKey: {
    //       name: 'id',
    //       allowNull: false
    //     }
    //   })
    // }
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
    },

    {
      sequelize,
      modelName: "Recipe",
    }
  );
  return Recipe;
};
