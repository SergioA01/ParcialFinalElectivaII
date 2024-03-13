const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

const typeDefs = gql`
  type Query {
    obtenerPlatos: String
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor GraphQL en http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
