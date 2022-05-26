import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  
  try {
    const { name, email, password, age } = req.newUser;

    const newUser = await userCreateService({name, email, password, age});

    return res.status(201).send(newUser);

  } catch (err) {

    if (err instanceof AppError) {
      handleError(err, res);
    }

  }
}

export default userCreateController;