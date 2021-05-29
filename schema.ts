import { GraphQLSchema } from "graphql";
import _ from "lodash";
import Query from "./Query/Queries";
import Mutation from "./Query/Mutations";

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
