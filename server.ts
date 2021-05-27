import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import db from './models';

const port = process.env.PORT || 4000;

const app = express();

const schema = buildSchema(`
type Query {
  hello: String
}`)

app.use(
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  })
);
// The `listen` method launches a web server.
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`🚀  Server ready at ${port}`);
  });
})

// npm i dotenv