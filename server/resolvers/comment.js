const Mutation = {
    //create a post comment
    createComment: async (root, { input: { comment, author, postId } }, { Comment, Post, User }) => {
        const newComment = await new Comment({
            comment,
            author,
            post: postId,
        }).save();

        await Post.findOneAndUpdate({ _id: postId }, { $push: { comments: newComment.id } });
        await User.findOneAndUpdate({ _id: author }, { $push: { comments: newComment.id } });

        return newComment;
    },
    // Deletes a post comment 
    deleteComment: async (root, { input: { id } }, { Comment, User, Post }) => {
        const comment = await Comment.findByIdAndRemove(id);
    
        // Delete comment from users collection
        await User.findOneAndUpdate({ _id: comment.author }, { $pull: { comments: comment.id } });
        // Delete comment from posts collection
        await Post.findOneAndUpdate({ _id: comment.post }, { $pull: { comments: comment.id } });
    
        return comment;
    },
};
    
export default { Mutation };
    