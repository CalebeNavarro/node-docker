import {Request, Response} from "express";
import { AppError, handleError } from "../../errors/appError";

import userListService from "../../services/user/userList.service";

const userListController = async (_: Request, res: Response) => {

  try {
    const users = await userListService();
    res.status(200).send(users);
  } catch (err) {

    if (err instanceof AppError) {
      handleError(err, res);
    }
    
  }

};

export default userListController;