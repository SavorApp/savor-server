import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLBoolean,
} from "graphql";
import db from "./models";
import _ from "lodash";

const User = new GraphQLObjectType({
  name: "User",
  description: "This represents a User",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
      },
      username: {
        type: GraphQLString,
      },
      image: {
        type: GraphQLString,
      },
      savoredListID: {
        type: GraphQLString,
      },
      viewedListID: {
        type: GraphQLString,
      },
      recipes: {
        type: new GraphQLList(Recipe),
        resolve(parent, args) {
          return db.Recipe.findAll({ where: { user_id: parent.id } });
        },
      },
    };
  },
});

const Recipe = new GraphQLObjectType({
  name: "Recipe",
  description: "This represents a Recipe",
  fields: () => {
    return {
      recipe_id: {
        type: GraphQLInt,
      },
      title: {
        type: GraphQLString,
      },
      summary: {
        type: GraphQLString,
      },
      image: {
        type: GraphQLString,
      },
      is_savored: {
        type: GraphQLBoolean,
      },
      cuisine: {
        type: GraphQLString,
      },
      diet: {
        type: GraphQLString,
      },
      user_id: {
        type: GraphQLInt,
      },
    };
  },
});

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
          return db.User.findAll({ where: args });
        },
      },
      recipes: {
        type: new GraphQLList(Recipe),
        resolve(root, args) {
          return db.Recipe.findAll({ where: args });
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

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "This is a root mutation",
  fields: () => {
    return {
      addRecipe: {
        type: Recipe,
        args: {
          user_id: { type: GraphQLInt },
          summary: { type: GraphQLString },
          title: { type: GraphQLString },
          is_savored: { type: GraphQLBoolean },
          recipe_id: { type: GraphQLInt },
        },
        resolve(_, args) {
          console.log(args);
          return db.Recipe.create({
            user_id: args.user_id,
            summary: args.summary,
            title: args.title,
            is_savored: args.is_savored,
            recipe_id: args.recipe_id,
          });
        },
      },

      deleteRecipe: {
        type: Recipe,
        args: {
          user_id: { type: GraphQLInt },
          recipe_id: { type: GraphQLInt },
        },
        async resolve(_, args) {
          const recipe = await db.Recipe.findOne({
            where: {
              user_id: args.user_id,
              recipe_id: args.recipe_id,
            },
          });
          recipe.destroy();
          return recipe;
        },
      },

      deleteUser: {
        type: User,
        args: {
          id: { type: GraphQLInt },
        },
        async resolve(_, args) {
          const user = await db.User.findByPk(args.id);
          user.destroy();
          return user;
        },
      },
    };
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
