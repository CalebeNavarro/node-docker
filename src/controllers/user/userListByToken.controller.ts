import { Request, Response } from "express";
import userListByTokenService from "../../services/user/userListByToken.service";

const userListByTokenController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;

    const user =  await userListByTokenService(email)

    return res.status(200).send(user);

  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({
        "error": err.name,
        "message": err.message,
      })
    }
  }
}

export default userListByTokenController;