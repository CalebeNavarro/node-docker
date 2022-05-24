import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

import { IUserCreate, IUser } from "../../interfaces/user";


const userCreateService = async ({name, email, password, age}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const isEmailAlreadyExist = users.find((person: any) => person.email === email);

  if (isEmailAlreadyExist) {
    throw new Error("Email already exist");
  }

  const user = userRepository.create({
    email,
    name,
    password,
    age
  });
  // const user = await AppDataSource
  //   .createQueryBuilder()
  //   .insert()
  //   .into(User)
  //   .values(
  //       {name, email, password, age}
  //   )
  //   .execute()

  await userRepository.save(user);


  return user;
};


export default userCreateService;