import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

import { IUserCreate } from "../../interfaces/user";


const userCreateService = async ({name, email, password, age}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const isEmailAlreadyExist = users.find((person: any) => person.email === email);

  if (isEmailAlreadyExist) {
    throw new AppError(409 ,"Email already exist");
  }

  const user = userRepository.create({
    email,
    name,
    password,
    age
  });

  await userRepository.save(user);


  return user;
};


export default userCreateService;