import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";
import Recipe from "../typeDefs/Recipe";
import User from "../typeDefs/User";

import db from "../models/index";

const Query = new GraphQLObjectType({
  name: "Query",
  description: "This is a root query",
  fields: () => {
    return {
      recipe: {
        type: Recipe,
        args: {
          user_id: { type: GraphQLInt },
          is_savored: { type: GraphQLBoolean },
        },
        resolve(parent, args) {
          return db.Recipe.findAll({
            where: { user_id: args.user_id, is_savored: args.is_savored },
          });
        },
      },
      user: {
        type: User,
        args: { id: { type: GraphQLInt } },
        resolve(parent, args) {
          return db.User.findByPk(args.id);
        },
      },
      savoredRecipes: {
        type: User,
        args: { id: { type: GraphQLInt } },
        resolve(parent, args) {
          return db.User.findByPk(args.id);
        },
      },
      users: {
        type: new GraphQLList(User),
        resolve(root, args) {
          return db.User.findAll();
        },
      },
      recipes: {
        type: new GraphQLList(Recipe),
        resolve(root, args) {
          return db.Recipe.findAll();
        },
      },
      isSavored: {
        type: new GraphQLList(Recipe),
        args: { id: { type: GraphQLInt } },
        resolve(root, args) {
          return db.Recipe.findAll({
            where: { user_id: args.id, is_savored: true },
          });
        },
      },
    };
  },
});

export default Query;
