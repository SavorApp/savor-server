"use strict";
import { Model } from "sequelize";

interface UserAttributes {
  _id: string;
  username: string;
  image_url: string;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    _id!: string;
    username!: string;
    image_url!: string;
    createdAt!: Date;
    updatedAt!: Date;

    static associate(models: any) {
      // define association here
      User.hasMany(models.Recipe, {
        foreignKey: {
          name: "user_id",
        },
        onDelete: "cascade",
      });
      User.hasOne(models.Filter, {
        foreignKey: {
          name: "user_id",
        },
        onDelete: "cascade",
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
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
