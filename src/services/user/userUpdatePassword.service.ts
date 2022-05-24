import { AppDataSource } from "../../data-source";
import { IUserUpdatePassword } from "../../interfaces/user";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";

const userUpdatePasswordService = async ({email, password, newPassword}: IUserUpdatePassword) => {
  const user = await AppDataSource
    .createQueryBuilder()
    .select("user")
    .from(User, "user")
    .where("user.email = :email", {email})
    .getOne()
  
  if (!user) {
    throw new Error("User not found");
  }
  if (!bcrypt.compareSync(password, user?.password)) {
    throw new Error("Password doest matche");
  }
  if (password === newPassword) {
    throw new Error("The password cannot be the same")
  }


  const passwordHash = bcrypt.hashSync(newPassword, 10);

  await AppDataSource
    .createQueryBuilder()
    .update(User)
    .set({password: passwordHash})
    .where("email = :email", {email})
    .execute()

    return true;
}

export default userUpdatePasswordService;