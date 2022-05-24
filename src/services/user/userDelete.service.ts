import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"

const userDeleteService = async (email: string): Promise<null> => {
  const result = await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(User)
    .where("email = :email", {email})
    .execute()
  

  if (!result["affected"]) {
    throw new Error("User not found");
  }

  return null;
}

export default userDeleteService;