import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    authenticate(username: $username, password: $password) {
      value
    }
  }
`