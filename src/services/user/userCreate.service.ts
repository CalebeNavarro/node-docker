import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

import { IUserCreate, IUser } from "../../interfaces/user";


const userCreateService = async ({name, email, password}: IUserCreate): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const isEmailAlreadyExist = users.find((person: any) => person.email === email);

  if (isEmailAlreadyExist) {
    throw new Error("Email already exist");
  }

  const user = userRepository.create({
    email,
    name,
    password
  });

  await userRepository.save(user);


  return user;
};


export default userCreateService;