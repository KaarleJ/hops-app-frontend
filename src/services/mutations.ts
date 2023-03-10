import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    authenticate(username: $username, password: $password) {
      value
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup($username: String!, $name: String!, $password: String!) {
    createUser(username: $username, name: $name, password: $password) {
      id
      name
      username
    }
  }
`;

export const ADD_COURSE = gql`
  mutation AddCourse(
    $name: String!
    $code: String!
    $ects: Int!
    $year: Int!
    $startPeriod: Int!
    $endPeriod: Int!
  ) {
    addCourse(
      name: $name
      code: $code
      ects: $ects
      year: $year
      startPeriod: $startPeriod
      endPeriod: $endPeriod
    ) {
      code
      ects
      endPeriod
      id
      name
      startPeriod
      year
    }
  }
`;

export const REMOVE_COURSE = gql`
  mutation RemoveCourse($removeCourseId: String!) {
    removeCourse(id: $removeCourseId) {

      
      id
    }
  }
`;

export const EDIT_COURSE = gql`
  mutation Mutation($editCourseId: String!, $name: String, $ects: Int, $year: Int, $code: String, $startPeriod: Int, $endPeriod: Int) {
    editCourse(id: $editCourseId, name: $name, ects: $ects, year: $year, code: $code, startPeriod: $startPeriod, endPeriod: $endPeriod) {
      code
      endPeriod
      ects
      id
      name
      startPeriod
      year
    }
  }
`;
