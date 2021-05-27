"use strict";
import { Model } from "sequelize";

interface RecipeAttributes {
  // Recipe_id: number;
  recipe_id: number;
  title: string;
  summary: string;
  is_savored: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Recipe extends Model<RecipeAttributes> implements RecipeAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // Recipe_id!: number;
    recipe_id!: number;
    title!: string;
    summary!: string;
    is_savored!: boolean;

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
    },
    {
      sequelize,
      modelName: "Recipe",
    }
  );
  return Recipe;
};
