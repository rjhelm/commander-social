import { gql } from '@apollo/client';

// create follow relation

export const CREATE_FOLLOW = gql`
  mutation($input: CreateFollowInput!) {
    createFollow(input: $input) {
      id
    }
  }
`;

// delete follow

export const DELETE_FOLLOW = gql`
  mutation($input: DeleteFollowInput!) {
    deleteFollow(input: $input) {
      id
    }
  }
`;
