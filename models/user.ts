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
        foreignKey: "user_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      User.hasOne(models.Filter, {
        foreignKey: "user_id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  User.init(
    {
      _id: {
        type: DataTypes.STRING,
        allowNull: false,
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
      freezeTableName: true,
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
