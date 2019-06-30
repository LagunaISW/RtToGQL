import { gql } from "apollo-server";

const schemas = gql`
  type Query{
    pokemon(id: Int!): Pokemon
  }

  type Pokemon{
    name: String!
  }

`;

export default schemas;
