"use strict";
import { Model } from "sequelize";

interface RecipeAttributes {
  recipe_id: string;
  title: string;
  summary: string;
  image: string;
  is_savored: boolean;
  cuisine: string;
  diet: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Recipe extends Model<RecipeAttributes> implements RecipeAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // Recipe_id!: number;
    recipe_id!: string;
    title!: string;
    summary!: string;
    image!: string;
    is_savored!: boolean;
    cuisine!: string;
    diet!: string;
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      summary: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      is_savored: {
        type: DataTypes.BOOLEAN,
      },
      cuisine: {
        type: DataTypes.STRING,
      },
      diet: {
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
