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
/*
const BuildingType = new GraphQLObjectType({
  name: "Building",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    architect: {
      type: ArchitectType,
      resolve(parent, args) {
        console.log(parent);
        // return _.find(architects, {id: parent.architectId})
        return Architect.findById(parent.architectId);
      },
    },
  }),
});

const ArchitectType = new GraphQLObjectType({
  name: "Architect",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    nationality: { type: GraphQLString },
    buildings: {
      type: new GraphQLList(BuildingType),
      resolve(parent, args) {
        // return _.filter(buildings, {architectId: parent.id});
        return Building.find({ architectId: parent.id });
      },
    },
  }),
});
*/

const User = new GraphQLObjectType({
  name: "User",
  description: "This represents a User",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(user) {
          return user.id;
        },
      },
      username: {
        type: GraphQLString,
        resolve(user) {
          return user.username;
        },
      },
      image: {
        type: GraphQLString,
        resolve(user) {
          return user.image;
        },
      },
      savoredListID: {
        type: GraphQLString,
        resolve(user) {
          return user.savoredListID;
        },
      },
      viewedListID: {
        type: GraphQLString,
        resolve(user) {
          return user.viewedListID;
        },
      },
      recipes: {
        type: new GraphQLList(Recipe),
        resolve(parent, args) {
          // console.log(db.Recipe);
          return db.Recipe.findAll({ where: { user_id: parent.id } });
          // return db.Recipe.find({ architectId: parent.id });
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
        resolve(recipe) {
          return recipe.recipe_id;
        },
      },
      title: {
        type: GraphQLString,
        resolve(recipe) {
          return recipe.title;
        },
      },
      summary: {
        type: GraphQLString,
        resolve(recipe) {
          return recipe.summary;
        },
      },
      image: {
        type: GraphQLString,
        resolve(recipe) {
          return recipe.image;
        },
      },
      //this is a string - should be a graphqlboolean
      //!!
      //!!
      //!!
      is_savored: {
        type: GraphQLBoolean,
        resolve(recipe) {
          return recipe.is_savored;
        },
      },
      cuisine: {
        type: GraphQLString,
        resolve(recipe) {
          return recipe.cuisine;
        },
      },
      diet: {
        type: GraphQLString,
        resolve(recipe) {
          return recipe.diet;
        },
      },
      user_id: {
        type: GraphQLInt,
        resolve(recipe) {
          return recipe.user_id;
        },
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
          return db.Recipe.findAll({ where: { user_id: args.id } });
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
        resolve(parent, args) {
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
    };
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
