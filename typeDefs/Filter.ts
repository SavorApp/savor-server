import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

const Filter = new GraphQLObjectType({
  name: "Filter",
  description: "This represents a Filter",
  fields: () => {
    return {
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
    };
  },
});

export default Filter;
