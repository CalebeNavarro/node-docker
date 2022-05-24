import {Request, Response} from "express";

import userListService from "../../services/user/userList.service";

const userListController = async (req: Request, res: Response) => {

  try {
    const users = await userListService();
    res.status(200).send(users);
  } catch (err) {

    if (err instanceof Error) {
      res.status(400).send({
        "error": err.name,
        "message": err.message
      })
    }
  }

};

export default userListController;