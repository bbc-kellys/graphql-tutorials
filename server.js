const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const { getUser, retrieveUsers, updateUser } = require('./resolvers/user-resolvers');

let schema = buildSchema(`
  type Query {
    user(id: Int!): Person
    users(plant: String): [Person]
  },
  type Person {
    id: Int
    name: String
    age: Int
    plant: String
  },
  type Mutation {
    updateUser(id: Int!, name: String!, age: String): Person
  }
`);

const root = {
  user: getUser,
  users: retrieveUsers,
  updateUser: updateUser
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));