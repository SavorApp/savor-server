'use strict';
import { Model } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  image: string;
  savoredListID: number;
  viewedListID: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes>
    implements UserAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    username!: string;
    image: string;
    savoredListID: number;
    viewedListID: number;

    // static associate(models: any) {
    //   // define association here
    //   User.hasOne(models.SavoredList)
    // }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    savoredListID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    viewedListID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};