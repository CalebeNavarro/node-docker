import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

import userDeleteService from "../../services/user/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  
  try {
    const email = req.userEmail;

    await userDeleteService(email);

    return res.status(204).send();

  } catch (err) {

    if (err instanceof AppError) {
      handleError(err, res);
    }
    
  }
}

export default userDeleteController;