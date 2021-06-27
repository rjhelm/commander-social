import { gql } from '@apollo/client';

// create comment

export const CREATE_COMMENT = gql`
  mutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`;

// delete comment

export const DELETE_COMMENT = gql`
  mutation($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      id
    }
  }
`;