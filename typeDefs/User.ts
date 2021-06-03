import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import Recipe from "./Recipe";
import Filter from "./Filter";
import db from "../models/index";

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
      recipe: {
        type: new GraphQLList(Recipe),
        resolve(parent, args) {
          return db.Recipe.findOne({
            where: { user_id: parent._id, recipe_id: args.recipe_id },
          });
        },
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
    };
  },
});

export default User;
