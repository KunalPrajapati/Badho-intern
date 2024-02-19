// src/graphql/query.js

import { gql } from '@apollo/client';

export const Query = gql`
  query CountryInfo($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
