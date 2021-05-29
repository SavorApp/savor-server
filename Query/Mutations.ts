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
import { filter } from "lodash";

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
      updateFilters: {
        type: Filter,
        args: {
          user_id: { type: GraphQLInt },
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
          console.log("🤌THIS IS FILTERS: ", filters, "🚀THIS IS ARGS: ", args);

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
