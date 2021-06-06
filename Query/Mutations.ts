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
          id: {
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
        resolve(_, args) {
          try {
            return db.Recipe.create({
              user_id: args.user_id,
              id: args.id,
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
          } catch (error) {
            return error;
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
            return db.User.create({
              _id: args._id,
              username: args.username,
              image_url: args.image_url,
            });
          } catch (error) {
            return error;
          }
        },
      },

      deleteRecipe: {
        type: Recipe,
        args: {
          user_id: { type: GraphQLString },
          id: { type: GraphQLInt },
        },
        async resolve(_, args) {
          try {
            const recipe = await db.Recipe.findOne({
              where: {
                user_id: args.user_id,
                id: args.id,
              },
            });
            recipe.destroy();
            return recipe;
          } catch (error) {
            return error;
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
            return error;
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
            return error;
          }
        },
      },
      updateRecipe: {
        type: Recipe,
        args: {
          user_id: {
            type: GraphQLString,
          },
          id: {
            type: GraphQLInt,
          },
          isSavored: {
            type: GraphQLBoolean,
          },
        },
        async resolve(_, args) {
          try {
            const recipe = await db.Recipe.findOne({
              where: { user_id: args.user_id, id: args.id },
            });

            // UPDATE recipe

            recipe.isSavored = args.isSavored;

            await recipe.save();

            return recipe;
          } catch (error) {
            return error;
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
            return db.Filter.create({
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
          } catch (error) {
            return error;
          }
        },
      },
    };
  },
});

export default Mutation;
