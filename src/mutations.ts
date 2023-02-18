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

export const ADD_COURSE = gql`
  mutation AddCourse($name: String!, $code: String!, $ects: Int!, $year: Int!, $startPeriod: Int!, $endPeriod: Int!) {
    addCourse(name: $name, code: $code, ects: $ects, year: $year, startPeriod: $startPeriod, endPeriod: $endPeriod) {
      code
      ects
      endPeriod
      id
      name
      startPeriod
      year
    }
  }
`