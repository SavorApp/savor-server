import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import Schema from "./schema";
import { umzug } from "./models/index";

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.use(
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

// The `listen` method launches a web server.
app.listen(port, async () => {
  console.log(`🚀  Server ready at ${port}`);
  // await umzug.up();
  await umzug.down({ to: 0 });
});
