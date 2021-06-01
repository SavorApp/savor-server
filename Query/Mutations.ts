import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";
import Recipe from "../typeDefs/Recipe";
import User from "../typeDefs/User";
import Filter from "../typeDefs/Filter";
import db from "../models/index";

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "This is a root mutation",
  fields: () => {
    return {
      addRecipe: {
        type: Recipe,
        args: {
          user_id: { type: GraphQLString },
          summary: { type: GraphQLString },
          title: { type: GraphQLString },
          is_savored: { type: GraphQLBoolean },
          recipe_id: { type: GraphQLString },
        },
        resolve(_, args) {
          return db.Recipe.create({
            user_id: args.user_id,
            summary: args.summary,
            title: args.title,
            is_savored: args.is_savored,
            recipe_id: args.recipe_id,
          });
        },
      },

      createUser: {
        type: User,
        args: {
          _id: { type: GraphQLString },
          username: { type: GraphQLString },
          image_url: { type: GraphQLString },
        },
        resolve(_, args) {
          return db.User.create({
            _id: args._id,
            username: args.username,
            image_url: args.image_url,
          });
        },
      },

      deleteRecipe: {
        type: Recipe,
        args: {
          user_id: { type: GraphQLString },
          recipe_id: { type: GraphQLString },
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
          _id: { type: GraphQLString },
        },
        async resolve(_, args) {
          const user = await db.User.findByPk(args._id);
          user.destroy();
          return user;
        },
      },
      updateFilters: {
        type: Filter,
        args: {
          user_id: { type: GraphQLString },
          diet: { type: GraphQLString },
          dish_type: { type: GraphQLString },
          cuisine: { type: GraphQLString },
          additional_requests: { type: GraphQLString },
          time_to_cook: {
            type: GraphQLInt,
          },
          servings: {
            type: GraphQLInt,
          },
        },
        async resolve(_, args) {
          const filters = await db.Filter.findOne({
            where: { user_id: args.user_id },
          });

          // UPDATE filters
          filters.diet = args.diet;
          filters.dish_type = args.dish_type;
          filters.cuisine = args.cuisine;
          filters.additional_requests = args.additional_requests;
          filters.time_to_cook = args.time_to_cook;
          filters.servings = args.servings;

          await filters.save();

          return filters;
        },
      },
    };
  },
});

export default Mutation;
