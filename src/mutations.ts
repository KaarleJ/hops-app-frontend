import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    authenticate(username: $username, password: $password) {
      value
    }
  }
`

export const SIGNUP = gql`
  mutation Signup($username: String!, $name: String!, $password: String!) {
    createUser(username: $username, name: $name, password: $password) {
      id
      name
      username
    }
  }
`