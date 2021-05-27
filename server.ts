import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import db from './models';
import {users} from './seeders/users'
import Schema from "./schema"

const port = process.env.PORT || 4000;

const app = express();

// const schema = buildSchema(`
// type Query {
//   hello: String
// }`)

app.use(
  graphqlHTTP({
    schema: Schema,
    // rootValue: root,
    graphiql: true,
  })
);

const createUsers = () => {
  users.map(user => {
    db.User.create(user)
  })
}

// -- Seeds the users table --
// createUsers()

// The `listen` method launches a web server.
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`🚀  Server ready at ${port}`);
  });
})

//npx sequelize-cli seed:generate --name demo-user