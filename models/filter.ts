"use strict";
import { Model } from "sequelize";

interface FilterAttributes {
  user_id: string;
  smartFilter: boolean;
  dishType: string;
  cuisine: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  readyInMinutes: number;
  servings: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Filter extends Model<FilterAttributes> {
    user_id!: string;
    smartFilter!: boolean;
    dishType!: string;
    cuisine!: string;
    vegetarian!: boolean;
    vegan!: boolean;
    glutenFree!: boolean;
    dairyFree!: boolean;
    readyInMinutes!: number;
    servings!: number;

    static associate(models: any) {
      // define association here
      Filter.belongsTo(models.User, {
        foreignKey: {
          name: "_id",
        },
      });
    }
  }
  Filter.init(
    {
      user_id: {
        type: DataTypes.STRING,
      },
      smartFilter: {
        type: DataTypes.BOOLEAN,
      },
      dishType: {
        type: DataTypes.STRING,
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
    },
    {
      sequelize,
      modelName: "Filter",
    }
  );
  return Filter;
};
