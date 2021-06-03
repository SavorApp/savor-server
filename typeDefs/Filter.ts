import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";

const Filter = new GraphQLObjectType({
  name: "Filter",
  description: "This represents a Filter",
  fields: () => {
    return {
      /*
      diet: {
        type: GraphQLString,
      },
      dish_type: {
        type: GraphQLString,
      },
      cuisine: {
        type: GraphQLString,
      },
      additional_requests: {
        type: GraphQLString,
      },
      time_to_cook: {
        type: GraphQLInt,
      },
      servings: {
        type: GraphQLInt,
      },
      user_id: {
        type: GraphQLString,
      },
*/

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
    };
  },
});

export default Filter;
