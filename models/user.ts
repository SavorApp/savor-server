"use strict";
import { Model } from "sequelize";

interface UserAttributes {
  _id: string;
  username: string;
  image_url: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    _id!: string;
    username!: string;
    image_url!: string;

    static associate(models: any) {
      // define association here
      User.hasMany(models.Recipe, {
        foreignKey: {
          name: "user_id",
          allowNull: false,
        },
      });
      User.hasMany(models.Filter, {
        foreignKey: {
          name: "user_id",
          allowNull: false,
        },
      });
    }
  }
  User.init(
    {
      _id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
