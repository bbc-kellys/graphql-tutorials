# GraphQL
https://www.digitalocean.com/community/tutorials/a-practical-graphql-getting-started-guide-with-nodejs

## What in the QL is it?
GraphQL is a query langauge created by Facebook with the purpose of building client applications based on intuitive and flexbile syntax for describing their data requirements and interactions. A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.Once a GraphQL service is running (on the url of a web service) it can recieve GraphQL queries to validate and execute. A recieved query is first checked to ensure it only refers to the types and fields defined, then runs the provided functions to produce a resultGraphQL features include:
- Hierarchial - Queries look exactly like the data they return
  –	Client-specified queries - The client has the liberty to dictate what to fetch from the server
- 	Strongly types - You can validate a query syntactically - within the GraphQL type system before execution. Helps to leverage powerul tools that improve the development experience.
  -	Introspective - You can query the type system using the GraphQL syntax. Great for parasing incoming data into strongly-typed interfaces, and not having to deal with parsing and manually transforming JSON into objects.

## REST
A challenge with traditional REST calls is the inability of the client to request a customized (limited or expanded) set of data. In most cases, once the client requests info from the server, it eithr gets all or none of the fields.Another issue is working with & maintaining multiple endpoints. As a platform grows, so do the number of endpoints Clients will often need to ask for data from different parts of the system - GraphQL API’s are organized in terms of types & fields, not endpoints!You can access the full capabilities of your data from a single EP.When building a GraphQL server, it’s only necessary to have one URL for all data fetching & mutating!

## Schema
In GraphQL, the schema manages queries & mutations, defining what is allowed to be executed in the GraphQL server. A schema defines a GraphQL API’s type system. It describes the complete set of possible data that can be accessed/requested.
A schema resides on the GraphQL API Server
Calls from the client are validated and executed against the schema & to find out information about the schema, a client can use introspection.
The most basic components of a GraphQL schema are object types, these represent which kind of object can be fetched from the service & which fields it has.

## Types
We can define different types inside the schema. In JS we use buildSchema function.Most cases there are Queries & Mutations. 
Query - is like a REST GET, in that it is used to fetch data related to the query
Mutation - hold functions that will be mapped to changes or mutations, CUD operations like POST, UPDATE, DELETE in REST.

## Resolvers
A resolver is responsible for mapping the operation to an actual function. Inside the type Query, you have operations with names, in the case of this repo it is users. You map this operation to a function with the same name inside of the root.
The resolver links to the root.

## Aliases
In a situation where you need to retrieve two different users, you may be wondering how you would identify each user. In GraphQL, you can’t directly query for the same field with different arguments. This can be done by aliasing multiple queries. Like so: 

```query getUsersWithAliases($userAID: Int!, $userBID: Int!) {
  userA: user(id: $userAID) {
    name
    age
    shark
  },
  userB: user(id: $userBID) {
    name
    age
    shark
  }
}
```
Aliasing allows for multiple API Queries for the same Type!

## Fragments
The query above has a problem in that it is repeating the same fields twice - we want our queries to be DRY in that they won't repeat themselves & waste code

This can be achieved with Fragments
```
query getUsersWithFragments($userAID: Int!, $userBID: Int!) {
  userA: user(id: $userAID) {
    ...userFields
  },
  userB: user(id: $userBID) {
    ...userFields
  }
}

fragment userFields on Person {
  name
  age
  shark
}
```

The fragment is defined clientside & can be reused for a query/mutation.

## Directives
...

## Mutations
Mutations are one of the other types of operations in GraphQL - which deal with the Creation, Updating & Deletion of data. CUD.

They work in the same way, having a resolver that links to the mutation via the root field.

