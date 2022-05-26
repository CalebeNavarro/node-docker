export interface IUser {
  id: string;
  name: string;
  age: number
  email: string;
  created_at: Date
  updated_at: Date
}

export interface IUserCreate extends IUserLogin{
  name: string;
  age: number

}

export interface IUserLogin {
  email: string;
  password: string
}

export interface IUserUpdatePassword extends IUserLogin {
  newPassword: string;
}