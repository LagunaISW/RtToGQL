import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import { pokeAPI } from "./datasource";
import schemas from "./schemas";

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  dataSources: () => ({
    pokeAPI: new pokeAPI()
  })
});

server.listen({ port: 5555 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});