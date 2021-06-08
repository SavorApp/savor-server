import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLScalarType,
} from "graphql";
import Recipe from "./Recipe";
import Filter from "./Filter";
import db from "../models/index";

export const GraphQLDate = new GraphQLScalarType({
  name: "Date",
  serialize(value) {
    return value;
  },
});

const User = new GraphQLObjectType({
  name: "User",
  description: "This represents a User",
  fields: () => {
    return {
      _id: {
        type: GraphQLString,
      },
      username: {
        type: GraphQLString,
      },
      image: {
        type: GraphQLString,
      },
      recipes: {
        type: new GraphQLList(Recipe),
        resolve(parent, args) {
          return db.Recipe.findAll({ where: { user_id: parent._id } });
        },
      },
      filters: {
        type: new GraphQLList(Filter),
        resolve(parent, args) {
          return db.Filter.findAll({ where: { user_id: parent._id } });
        },
      },
      createdAt: {
        type: GraphQLDate,
      },
      updatedAt: {
        type: GraphQLDate,
      },
    };
  },
});

export default User;
