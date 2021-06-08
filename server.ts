import express from "express";
import { graphqlHTTP } from "express-graphql";
import db from "./models";
import { users } from "./seeders/users";
import { recipes } from "./seeders/recipes";
import { filters } from "./seeders/filters";
import cors from "cors";
import Schema from "./schema";

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

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
app.listen(port, async () => {
  // -- Seeds the users table --
  await createUsers();
  await createRecipes();
  await createFilters();

  console.log(`🚀  Server ready at ${port}`);
});
