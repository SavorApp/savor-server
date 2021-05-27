import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
} from "graphql";
import db from "./models";

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
    };
  },
});

const Query = new GraphQLObjectType({
  name: "Query",
  description: "This is a root query",
  fields: () => {
    return {
      users: {
        type: new GraphQLList(User),
        resolve(root, args) {
          return db.User.findAll({ where: args });
        },
      },
    };
  },
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
