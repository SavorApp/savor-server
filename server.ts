const { ApolloServer, gql } = require("apollo-server");

const port = 4000;

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const server = new ApolloServer({ typeDefs });

// The `listen` method launches a web server.
server.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`);
});
