import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "./../../interfaces/user";


const userLoginService = async ({email, password}: IUserLogin): Promise<string> => {
  const account = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", {email})
    .getOne()
    

  if (!account || !bcrypt.compareSync(password, account.password)) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    {email: email},
    "tete",
    {expiresIn: '1d'}
  )
  return token;
}

export default userLoginService;