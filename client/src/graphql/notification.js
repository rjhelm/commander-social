import { gql } from '@apollo/client';

// select from 

const notificationPayload = `
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
`;

// creat notif for user

export const CREATE_NOTIFICATION = gql`
  mutation($input: CreateNotificationInput!) {
    createNotification(input: $input) {
      id
    }
  }
`;

// delete notif

export const DELETE_NOTIFICATION = gql`
  mutation($input: DeleteNotificationInput!) {
    deleteNotification(input: $input) {
      id
    }
  }
`;

// user notifications

export const GET_USER_NOTIFICATION = gql`
  query($userId: ID!, $skip: Int, $limit: Int) {
    getUserNotifications(userId: $userId, skip: $skip, limit: $limit) {
      count
      notifications {
        ${notificationPayload}
      }
    }
  }
`;

// notification seen

export const UPDATE_NOTIFICATION_SEEN = gql`
  mutation($input: UpdateNotificationSeenInput!) {
    updateNotificationSeen(input: $input)
  }
`;

// real time notification

export const NOTIFICATION_CREATED_OR_DELETED = gql`
  subscription {
    notificationCreatedOrDeleted {
      operation
      notification {
        ${notificationPayload}
      }
    }
  }
`;