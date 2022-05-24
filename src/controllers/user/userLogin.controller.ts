import { Request, Response } from "express";
import userLoginService from "../../services/user/userLogin.service";


const userLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    const token = await userLoginService({email, password});

    return res.status(200).send({token});
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({
        "error": err.name,
        "message": err.message,
      })
    }
  }
}

export default userLoginController;