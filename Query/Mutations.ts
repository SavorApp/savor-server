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
          /*
          user_id: { type: GraphQLString },
          summary: { type: GraphQLString },
          title: { type: GraphQLString },
          is_savored: { type: GraphQLBoolean },
          recipe_id: { type: GraphQLInt },
          recipe_id: {
            type: GraphQLInt,
          },
          */
          title: {
            type: GraphQLString,
          },
          summary: {
            type: GraphQLString,
          },
          is_savored: {
            type: GraphQLBoolean,
          },
          cuisine: {
            type: GraphQLString,
          },
          user_id: {
            type: GraphQLString,
          },
          vegetarian: {
            type: GraphQLBoolean,
          },
          vegan: {
            type: GraphQLBoolean,
          },
          gluten_free: {
            type: GraphQLBoolean,
          },
          dairy_free: {
            type: GraphQLBoolean,
          },
          ready_in_minutes: {
            type: GraphQLInt,
          },
          servings: {
            type: GraphQLInt,
          },
          ingredients: {
            type: GraphQLString,
          },
        },
        resolve(_, args) {
          return db.Recipe.create({
            user_id: args.user_id,
            summary: args.summary,
            title: args.title,
            is_savored: args.is_savored,
            recipe_id: args.recipe_id,
            cuisine: args.cuisine,
            vegetarian: args.vegetarian,
            vegan: args.vegan,
            gluten_free: args.gluten_free,
            dairy_free: args.dairy_free,
            ready_in_minutes: args.ready_in_minutes,
            servings: args.servings,
            ingredients: args.ingredients,
            /*

            */
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
          smart_filter: {
            type: GraphQLBoolean,
          },
          dish_type: {
            type: GraphQLString,
          },
          cuisine: {
            type: GraphQLString,
          },
          vegetarian: {
            type: GraphQLBoolean,
          },
          vegan: {
            type: GraphQLBoolean,
          },
          gluten_free: {
            type: GraphQLBoolean,
          },
          dairy_free: {
            type: GraphQLBoolean,
          },
          ready_in_minutes: {
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

          filters.smart_filter = args.smart_filter;
          filters.dish_type = args.dish_type;
          filters.cuisine = args.cuisine;
          filters.vegetarian = args.vegetarian;
          filters.vegan = args.vegan;
          filters.gluten_free = args.gluten_free;
          filters.dairy_free = args.dairy_free;
          filters.ready_in_minutes = args.ready_in_minutes;
          filters.servings = args.servings;
          /*
          filters.diet = args.diet;
          filters.dish_type = args.dish_type;
          filters.cuisine = args.cuisine;
          filters.additional_requests = args.additional_requests;
          filters.time_to_cook = args.time_to_cook;
          filters.servings = args.servings;
          */

          await filters.save();

          return filters;
        },
      },
    };
  },
});

export default Mutation;
