import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError";
import userListByIdService from "../../services/user/userListById.service";

const userListById = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  try {
    const user = await userListByIdService(user_id);
    res.status(200).send(user);

  } catch (err) {

    if (err instanceof AppError) {
      handleError(err, res);
    }

  }
}

export default userListById;