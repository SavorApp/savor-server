import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
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
          user_id: {
            type: GraphQLString,
          },
          recipe_id: {
            type: GraphQLInt,
          },
          title: {
            type: GraphQLString,
          },
          cuisine: {
            type: GraphQLString,
          },
          dishType: {
            type: GraphQLString,
          },
          vegetarian: {
            type: GraphQLBoolean,
          },
          vegan: {
            type: GraphQLBoolean,
          },
          glutenFree: {
            type: GraphQLBoolean,
          },
          dairyFree: {
            type: GraphQLBoolean,
          },
          readyInMinutes: {
            type: GraphQLInt,
          },
          servings: {
            type: GraphQLInt,
          },
          ingredients: {
            type: new GraphQLList(GraphQLString),
          },
          isSavored: {
            type: GraphQLBoolean,
          },
        },
        async resolve(_, args) {
          try {
            const recipe = await db.Recipe.create({
              user_id: args.user_id,
              recipe_id: args.recipe_id,
              title: args.title,
              cuisine: args.cuisine,
              dishType: args.dishType,
              vegetarian: args.vegetarian,
              vegan: args.vegan,
              glutenFree: args.glutenFree,
              dairyFree: args.dairyFree,
              readyInMinutes: args.readyInMinutes,
              servings: args.servings,
              ingredients: args.ingredients,
              isSavored: args.isSavored,
            });
            return recipe;
          } catch (error) {
            throw new Error(error);
          }
        },
      },

      createUser: {
        type: User,
        args: {
          _id: { type: GraphQLString },
          username: { type: GraphQLString },
          image_url: { type: GraphQLString },
        },
        async resolve(_, args) {
          try {
            const user = await db.User.create({
              _id: args._id,
              username: args.username,
              image_url: args.image_url,
            });
            return user;
          } catch (error) {
            throw new Error(error);
          }
        },
      },

      deleteRecipe: {
        type: Recipe,
        args: {
          user_id: { type: GraphQLString },
          recipe_id: { type: GraphQLInt },
        },
        async resolve(_, args) {
          try {
            const recipe = await db.Recipe.findOne({
              where: {
                user_id: args.user_id,
                recipe_id: args.recipe_id,
              },
            });
            recipe.destroy();
            return recipe;
          } catch (error) {
            throw new Error(error);
          }
        },
      },

      deleteUser: {
        type: User,
        args: {
          _id: { type: GraphQLString },
        },
        async resolve(_, args) {
          try {
            const user = await db.User.findByPk(args._id);
            user.destroy();
            return user;
          } catch (error) {
            throw new Error(error);
          }
        },
      },
      updateFilters: {
        type: Filter,
        args: {
          user_id: {
            type: GraphQLString,
          },
          smartFilter: {
            type: GraphQLBoolean,
          },
          dishType: {
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
          glutenFree: {
            type: GraphQLBoolean,
          },
          dairyFree: {
            type: GraphQLBoolean,
          },
          readyInMinutes: {
            type: GraphQLInt,
          },
          servings: {
            type: GraphQLInt,
          },
        },
        async resolve(_, args) {
          try {
            const filters = await db.Filter.findOne({
              where: { user_id: args.user_id },
            });

            // UPDATE filters

            filters.smartFilter = args.smartFilter;
            filters.dishType = args.dishType;
            filters.cuisine = args.cuisine;
            filters.vegetarian = args.vegetarian;
            filters.vegan = args.vegan;
            filters.glutenFree = args.glutenFree;
            filters.dairyFree = args.dairyFree;
            filters.readyInMinutes = args.readyInMinutes;
            filters.servings = args.servings;

            await filters.save();

            return filters;
          } catch (error) {
            throw new Error(error);
          }
        },
      },

      updateRecipe: {
        type: Recipe,
        args: {
          user_id: {
            type: GraphQLString,
          },
          recipe_id: {
            type: GraphQLInt,
          },
          isSavored: {
            type: GraphQLBoolean,
          },
        },
        async resolve(_, args) {
          try {
            const recipe = await db.Recipe.findOne({
              where: { user_id: args.user_id, recipe_id: args.recipe_id },
            });

            // UPDATE recipe

            recipe.isSavored = args.isSavored;

            await recipe.save();

            return recipe;
          } catch (error) {
            throw new Error(error);
          }
        },
      },
      createFilters: {
        type: Filter,
        args: {
          user_id: {
            type: GraphQLString,
          },
          smartFilter: {
            type: GraphQLBoolean,
          },
          dishType: {
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
          glutenFree: {
            type: GraphQLBoolean,
          },
          dairyFree: {
            type: GraphQLBoolean,
          },
          readyInMinutes: {
            type: GraphQLInt,
          },
          servings: {
            type: GraphQLInt,
          },
        },
        async resolve(_, args) {
          try {
            const filters = await db.Filter.create({
              user_id: args.user_id,
              smartFilter: args.smartFilter,
              dishType: args.dishType,
              cuisine: args.cuisine,
              vegetarian: args.vegetarian,
              vegan: args.vegan,
              glutenFree: args.glutenFree,
              dairyFree: args.dairyFree,
              readyInMinutes: args.readyInMinutes,
              servings: args.servings,
            });
            return filters;
          } catch (error) {
            throw new Error(error);
          }
        },
      },
    };
  },
});

export default Mutation;
