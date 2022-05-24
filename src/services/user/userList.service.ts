import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/user";

const userListService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = userRepository.find()

  
  return users;
}

export default userListService;