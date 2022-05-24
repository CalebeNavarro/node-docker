export interface IUser extends IUserCreate {
  id: string;
}

export interface IUserCreate extends IUserLogin{
  name: string;
}

export interface IUserLogin {
  email: string,
  password: string
}

export interface IUserUpdatePassword extends IUserLogin {
  newPassword: string
}