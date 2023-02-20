import { gql } from '@apollo/client';

export const ME =gql`
  query Query {
    Me {
      courses {
        ects
        code
        endPeriod
        id
        name
        startPeriod
        year
      }
      id
      name
      username
    }
  }
`

export const COURSES = gql`
  query Courses($year: String!) {
    courses(year: $year) {
      code
      ects
      endPeriod
      id
      name
      year
      startPeriod
    }
  }
`