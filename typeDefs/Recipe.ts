import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from "graphql";

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
    };
  },
});

export default Recipe;
