import { gql } from '@apollo/client';

// post comments

export const postCommentsPayload = `
  comments {
    id
    comment
    author {
      id
      username
      fullName
      image
    }
  }
`;

// posts from specific author

export const postAuthorPayload = `
  author {
    id
    username
    fullName
    image
    following {
      id
      user
    }
    followers {
      id
      user
    }
    notifications {
      id
      author {
        id
        username
      }
      follow {
        id
      }
      like {
        id
      }
      comment {
        id
      }
    }
  }
`;

// select from post likes

export const postLikesPayload = `
  likes {
    id
    user
    post
  }
`;

//post created

export const CREATE_POST = gql`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`;

// posts from users followed

export const GET_FOLLOWED_POSTS = gql`
  query($userId: String!, $skip: Int, $limit: Int) {
    getFollowedPosts(userId: $userId, skip: $skip, limit: $limit) {
      count
      posts {
        id
        title
        image
        imagePublicId
        createdAt
        ${postAuthorPayload}
        ${postCommentsPayload}
        ${postLikesPayload}
      }
    }
  }
`;

// all posts available

export const GET_POSTS = gql`
  query($authUserId: ID!, $skip: Int, $limit: Int) {
    getPosts(authUserId: $authUserId, skip: $skip, limit: $limit) {
      count
      posts {
        id
        title
        image
        ${postAuthorPayload}
        ${postCommentsPayload}
        ${postLikesPayload}
      }
    }
  }
`;

// post by id

export const GET_POST = gql`
  query($id: ID!) {
    getPost(id: $id) {
      id
      title
      image
      createdAt
      ${postAuthorPayload}
      ${postCommentsPayload}
      ${postLikesPayload}
    }
  }
`;

// delete post

export const DELETE_POST = gql`
  mutation($input: DeletePostInput!) {
    deletePost(input: $input) {
      id
    }
  }
`;