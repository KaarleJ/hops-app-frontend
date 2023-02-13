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