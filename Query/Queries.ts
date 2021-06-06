import {
  GraphQLList,
  GraphQLString,
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
          // _id: { type: GraphQLString },
          id: { type: GraphQLInt },
        },
        async resolve(parent, args) {
          try {
            return db.Recipe.findOne(args.id);
          } catch (error) {
            return error;
          }
        },
      },
      user: {
        type: User,
        args: { _id: { type: GraphQLString } },
        async resolve(parent, args) {
          try {
            return db.User.findByPk(args._id);
          } catch (error) {
            return error;
          }
        },
      },
      savoredRecipes: {
        type: User,
        args: { _id: { type: GraphQLString } },
        async resolve(parent, args) {
          try {
            return db.User.findByPk(args._id);
          } catch (error) {
            return error;
          }
        },
      },
      users: {
        type: new GraphQLList(User),
        async resolve(root, args) {
          try {
            return db.User.findAll();
          } catch (error) {
            return error;
          }
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
        args: { _id: { type: GraphQLString } },
        async resolve(root, args) {
          try {
            return db.Recipe.findAll({
              where: { user_id: args._id, is_savored: true },
            });
          } catch (error) {
            return error;
          }
        },
      },
    };
  },
});

export default Query;
