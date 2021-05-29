"use strict";
import { Model } from "sequelize";

// diet (vegan, vegetarian, pescitarian, ...)
// dish type (lunch, dinner, side, main, ...)
// cuisine (Japanese, French, ...)
// intolerance
// time to cook
// servings

interface FilterAttributes {
  diet: string;
  dish_type: string;
  cuisine: string;
  additional_requests: string;
  time_to_cook: number;
  servings: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Filter extends Model<FilterAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    diet!: string;
    dish_type!: string;
    cuisine!: string;
    additional_requests!: string;
    time_to_cook!: number;
    servings!: number;

    // static associate(models: any) {
    //   // define association here
    // }
  }
  Filter.init(
    {
      diet: {
        type: DataTypes.STRING,
      },
      dish_type: {
        type: DataTypes.STRING,
      },
      cuisine: {
        type: DataTypes.STRING,
      },
      additional_requests: {
        type: DataTypes.STRING,
      },
      time_to_cook: {
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
