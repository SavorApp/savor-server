import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import db from "./models";
import { users } from "./seeders/users";
import { recipes } from "./seeders/recipes";
import { filters } from "./seeders/filters";
import Schema from "./schema";

const port = process.env.PORT || 4000;

const app = express();

app.use(
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

const createUsers = () => {
  users.map((user) => {
    db.User.create(user);
  });
};
const createRecipes = () => {
  recipes.map((recipe) => {
    db.Recipe.create(recipe);
  });
};
const createFilters = () => {
  filters.map((filter) => {
    db.Filter.create(filter);
  });
};

// The `listen` method launches a web server.
db.sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      // -- Seeds the users table --
      createUsers();
      createRecipes();
      createFilters();
      console.log(`🚀  Server ready at ${port}`);
    });
  })
  .catch((err: Error) => console.log(err));

//npx sequelize-cli seed:generate --name demo-user
