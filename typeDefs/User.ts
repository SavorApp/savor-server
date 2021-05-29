import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import Recipe from "./Recipe";
import Filter from "./Filter";
import db from "../models/index";

const User = new GraphQLObjectType({
  name: "User",
  description: "This represents a User",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
      },
      username: {
        type: GraphQLString,
      },
      image: {
        type: GraphQLString,
      },
      recipes: {
        type: new GraphQLList(Recipe),
        resolve(parent, args) {
          return db.Recipe.findAll({ where: { user_id: parent.id } });
        },
      },
      filters: {
        type: new GraphQLList(Filter),
        resolve(parent, args) {
          return db.Filter.findAll({ where: { user_id: parent.id } });
        },
      },
    };
  },
});

export default User;
