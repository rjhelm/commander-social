import { gql } from '@apollo/client';
import { postCommentsPayload, postAuthorPayload, postLikesPayload } from './post';

// select from for user

const userPayload = `
  id
  username
  email
  fullName
  image
  imagePublicId
  coverImage
  coverImagePublicId
  createdAt
`;

// specific user by id

export const GET_USER = gql`
  query($username: String, $id: ID) {
    getUser(username: $username, id: $id) {
      ${userPayload}
      isOnline
      posts {
        id
      }
      following {
        id
      }
      followers {
        id
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
  }
`;

// user posts

export const GET_USER_POSTS = gql`
  query($username: String!, $skip: Int, $limit: Int) {
    getUserPosts(username: $username, skip: $skip, limit: $limit) {
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

// authenticate user

export const GET_AUTH_USER = gql`
  query {
    getAuthUser {
      ${userPayload}
      newNotifications {
        id
        createdAt
        author {
          id
          fullName
          username
          image
        }
        follow {
          id
        }
        comment {
          id
          post {
            id
            image
          }
        }
        like {
          id
          post {
            id
            image
          }
        }
      }
      newConversations {
        id
        username
        fullName
        image
        lastMessage
        lastMessageCreatedAt
      }
      likes {
        id
        user
        post
      }
      posts {
        id
      }
      following {
        id
        user
      }
      followers {
        id
      }
    }
  }
`;

// all users

export const GET_USERS = gql`
  query($userId: String!, $skip: Int, $limit: Int) {
    getUsers(userId: $userId, skip: $skip, limit: $limit) {
      count
      users {
        id
        fullName
        username
        image
        following {
          id
          user
        }
        followers {
          id
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
        }
      }
    }
  }
`;

// username and fullname search

export const SEARCH_USERS = gql`
  query($searchQuery: String!) {
    searchUsers(searchQuery: $searchQuery) {
      id
      fullName
      username
      image
    }
  }
`;

// handle user photo uploads

export const UPLOAD_PHOTO = gql`
  mutation($input: UploadUserPhotoInput!) {
    uploadUserPhoto(input: $input) {
      id
    }
  }
`;

// sign user up

export const SIGN_UP = gql`
  mutation($input: SignUpInput!) {
    signup(input: $input) {
      token
    }
  }
`;

// sign user in

export const SIGN_IN = gql`
  mutation($input: SignInInput!) {
    signin(input: $input) {
      token
    }
  }
`;

// request reset pass

export const REQUEST_PASSWORD_RESET = gql`
  mutation($input: RequestPasswordResetInput!) {
    requestPasswordReset(input: $input) {
      message
    }
  }
`;

// verify pass token

export const VERIFY_RESET_PASSWORD_TOKEN = gql`
  query($email: String!, $token: String!) {
    verifyResetPasswordToken(email: $email, token: $token) {
      message
    }
  }
`;

// reset pass

export const RESET_PASSWORD = gql`
  mutation($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      token
    }
  }
`;

// logged in user suggestions

export const USER_SUGGESTIONS = gql`
  query($userId: String!) {
    suggestPeople(userId: $userId) {
      id
      fullName
      username
      image
    }
  }
`;

// loggin user conversations

export const GET_CONVERSATIONS = gql`
  query($authUserId: ID!) {
    getConversations(authUserId: $authUserId) {
      id
      username
      fullName
      image
      isOnline
      seen
      lastMessage
      lastMessageSender
      lastMessageCreatedAt
    }
  }
`;

// user online realtime

export const IS_USER_ONLINE_SUBSCRIPTION = gql`
  subscription($authUserId: ID!, $userId: ID!) {
    isUserOnline(authUserId: $authUserId, userId: $userId) {
      userId
      isOnline
    }
  }
`;