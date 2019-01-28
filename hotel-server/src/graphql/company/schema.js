const { gql } = require('apollo-server-express');

const schema = gql`

  type Company {
    id: ID,
    name: String!,
    company: String!,
    street1: String,
    street2: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  }

  type Query {
    company(id: ID): Company
    companies: [Company]
  }

  type Mutation {  

    saveCompany(
      id: ID,
      name: String!,
      company: String!,
      street1: String,
      street2: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    ): Company
      
    removeCompany(id: ID!): Company
  }
`;

module.exports = schema;
