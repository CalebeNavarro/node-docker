import { AppDataSource } from "../../data-source";
import { IUserUpdatePassword } from "../../interfaces/user";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const userUpdatePasswordService = async ({email, password, newPassword}: IUserUpdatePassword) => {
  const user = await AppDataSource
    .createQueryBuilder()
    .select("user")
    .from(User, "user")
    .where("user.email = :email", {email})
    .addSelect("user.password")
    .getOne()
  
  if (!user) {
    throw new AppError(404 ,"User not found");
  }
  if (!bcrypt.compareSync(password, user?.password)) {
    throw new AppError(401 ,"Password doest matche");
  }
  if (password === newPassword) {
    throw new AppError(409 ,"The password cannot be the same")
  }


  const passwordHash = bcrypt.hashSync(newPassword, 10);

  await AppDataSource
    .createQueryBuilder()
    .update(User)
    .set({password: passwordHash, updated_at: new Date})
    .where("email = :email", {email})
    .execute()

    return true;
}

export default userUpdatePasswordService;