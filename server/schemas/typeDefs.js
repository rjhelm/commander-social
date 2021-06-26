// import the gql tagged template function //
const { gql } = require('apollo-server-express');

// create our typedefs //
const typeDefs = gql`
    type Post {
        _id: ID
        postText: String
        createdAt: String
        username: String
        commentCount: Int
    }
    type Query {
        posts: [Post]
    }
`;

//export the typedefs //
module.exports = typeDefs;