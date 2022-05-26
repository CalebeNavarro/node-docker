import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userUpdatePasswordService from "../../services/user/userUpdatePassword.service";

const userUpdatePasswordController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;
    const {password, newPassword} = req.body;

    if (!password || !newPassword) {
      return res.status(400).send({message: "invalid fields"})
    }

    await userUpdatePasswordService({email, password, newPassword});

    return res.status(201).send({message: "Password updated"});

  } catch (err) {

    if (err instanceof AppError) {
      handleError(err, res);
    }
    
  }
}

export default userUpdatePasswordController;