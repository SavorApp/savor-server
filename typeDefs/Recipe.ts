import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
} from "graphql";
import { GraphQLDate } from "./User";

const Recipe = new GraphQLObjectType({
  name: "Recipe",
  description: "This represents a Recipe",
  fields: () => {
    return {
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
      createdAt: {
        type: GraphQLDate,
      },
      updatedAt: {
        type: GraphQLDate,
      },
    };
  },
});

export default Recipe;
