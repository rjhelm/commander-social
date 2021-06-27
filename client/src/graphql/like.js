import { gql } from '@apollo/client';

// create a like

export const CREATE_LIKE = gql`
  mutation($input: CreateLikeInput!) {
    createLike(input: $input) {
      id
    }
  }
`;

// delete likes

export const DELETE_LIKE = gql`
  mutation($input: DeleteLikeInput!) {
    deleteLike(input: $input) {
      id
    }
  }
`;