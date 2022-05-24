import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser } from "../../interfaces/user";


const userListByTokenService = async (email: string) => {
  const user = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.email = :email", {email: email})
    .getOne()
  
  if (!user) {
    throw new Error("User not found")
  }

  return user;
}

export default userListByTokenService;