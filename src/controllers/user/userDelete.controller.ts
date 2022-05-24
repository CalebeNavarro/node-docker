import { Request, Response } from "express";

import userDeleteService from "../../services/user/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  
  try {
    const email = req.userEmail;

    await userDeleteService(email);

    return res.status(204).send();

  } catch (err) {

    if(err instanceof Error){
      return res.status(404).send({
        "error": err.name,
        "message": err.message
      })
    }
  }
}

export default userDeleteController;