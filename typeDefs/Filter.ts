import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";
import { GraphQLDate } from "./User";

const Filter = new GraphQLObjectType({
  name: "Filter",
  description: "This represents a Filter",
  fields: () => {
    return {
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
      createdAt: {
        type: GraphQLDate,
      },
      updatedAt: {
        type: GraphQLDate,
      },
    };
  },
});

export default Filter;
