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
      /*
      recipe: {
        type: User,
        args: {
          _id: { type: GraphQLString },
          recipe_id: { type: GraphQLInt },
        },
        async resolve(parent, args) {
          const user = await db.User.findByPk(args._id);
          console.log(user);
        },
      },
*/
      recipe: {
        type: Recipe,
        args: {
          // _id: { type: GraphQLString },
          recipe_id: { type: GraphQLInt },
        },
        resolve(parent, args) {
          return db.Recipe.findOne(args.recipe_id);
        },
      },
      user: {
        type: User,
        args: { _id: { type: GraphQLString } },
        resolve(parent, args) {
          return db.User.findByPk(args._id);
        },
      },
      savoredRecipes: {
        type: User,
        args: { _id: { type: GraphQLString } },
        resolve(parent, args) {
          return db.User.findByPk(args._id);
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
        args: { _id: { type: GraphQLString } },
        resolve(root, args) {
          return db.Recipe.findAll({
            where: { user_id: args._id, is_savored: true },
          });
        },
      },
    };
  },
});

export default Query;
