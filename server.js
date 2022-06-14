const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");

const QueryRoot = new graphql.GraphQLObjectType({
  name: "Query",
  fields: () => ({
    chord: {
      type: graphql.GraphQLString,
      resolve: () => "CMaj7add9",
    },
  }),
});

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express();
app.get(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
