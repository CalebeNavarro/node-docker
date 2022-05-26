import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListByTokenService from "../../services/user/userListByToken.service";

const userListByTokenController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;

    const user =  await userListByTokenService(email)

    return res.status(200).send(user);

  } catch (err) {

    if (err instanceof AppError) {
      handleError(err, res);
    }
    
  }
}

export default userListByTokenController;