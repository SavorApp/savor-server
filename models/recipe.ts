"use strict";
import { Model } from "sequelize";

interface RecipeAttributes {
  recipe_id: number;
  title: string;
  summary: string;
  // image: string;
  is_savored: boolean;
  cuisine: string;
  vegetarian: boolean;
  vegan: boolean;
  gluten_free: boolean;
  dairy_free: boolean;
  ready_in_minutes: number;
  servings: number;
  ingredients: string;
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

    recipe_id!: number;
    title!: string;
    summary!: string;
    // image: string;
    is_savored!: boolean;
    cuisine!: string;
    vegetarian!: boolean;
    vegan!: boolean;
    gluten_free!: boolean;
    dairy_free!: boolean;
    ready_in_minutes!: number;
    servings!: number;
    ingredients!: string;
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
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      summary: {
        type: DataTypes.STRING,
      },
      is_savored: {
        type: DataTypes.BOOLEAN,
      },
      cuisine: {
        type: DataTypes.STRING,
      },
      vegetarian: {
        type: DataTypes.BOOLEAN,
      },
      vegan: {
        type: DataTypes.BOOLEAN,
      },
      gluten_free: {
        type: DataTypes.BOOLEAN,
      },
      dairy_free: {
        type: DataTypes.BOOLEAN,
      },
      ready_in_minutes: {
        type: DataTypes.INTEGER,
      },
      servings: {
        type: DataTypes.INTEGER,
      },
      ingredients: {
        type: DataTypes.STRING,
      },
    },

    {
      sequelize,
      modelName: "Recipe",
    }
  );
  return Recipe;
};
