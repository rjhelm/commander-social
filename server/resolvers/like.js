const Mutation = {
    // creates a like on a post
    createLike: async (root, { input: { userId, postId } }, { Like, Post, User }) => {
        const like = await new Like({ user: userId, post: postId }).save();

        // push to collection
        await Post.findOneAndUpdate({ _id: postId }, { $push: { likes: like.id } });
        await User.findOneAndUpdate({ _id: userId }, { $push: { likes: like.id } });

        return like;

    },
    // delete like on post
    deleteLike: async (root, { input: { id } }, { Like, User, Post }) => {
        const like = await Like.findByIdAndRemove(id);

        // Delete like from users collection
        await User.findOneAndUpdate({ _id: like.user }, { $pull: { likes: like.id } });
        // Delete like from posts collection
        await Post.findOneAndUpdate({ _id: like.post }, { $pull: { likes: like.id } });

        return like;
    },
};

export default { Mutation };