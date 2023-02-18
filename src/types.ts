export interface Signin{
  username: string,
  password: string
}

export interface Signup{
  username: string,
  name: string,
  password: string
}

export interface CreatedUser{
  username: string,
  name: string,
  id: string,
}

export type Period = 0 | 1 | 2 | 3 | 4 | 5;

export interface Course {
  name: string,
  code: string,
  id: string,
  ects: number,
  year: number,
  startPeriod: Period,
  endPeriod: Period,
}

export interface Me {
  courses: Course[],
  id: string,
  name: string,
  username: string
}