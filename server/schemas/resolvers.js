const { User, Post } = require('../models');

const resolvers = {
    Query: {
        posts: async () => {
            return Post.find().sort({ createdAt: -1 });
        
        }
    }
};

module.exports = resolvers;