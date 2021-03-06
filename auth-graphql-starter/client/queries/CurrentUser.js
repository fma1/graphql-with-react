import { gql } from '@apollo/client';

export default gql`
    query userQuery {
      user {
        id,
        email
      }
    }
`;
