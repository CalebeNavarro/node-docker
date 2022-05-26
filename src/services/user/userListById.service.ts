import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUser } from "../../interfaces/user"

const userListByIdService = async (user_id: string): Promise<IUser> =>  {
  const user = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: user_id })
    .getOne()

  if (!user) {
    throw new AppError(404, "User not found");
  }
  return user
}

export default userListByIdService;