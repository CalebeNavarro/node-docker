import { Request, Response } from "express"
import userListByIdService from "../../services/user/userListById.service";

const userListById = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  try {
    const user = await userListByIdService(user_id);
    res.status(200).send(user);

  } catch (err) {

    if (err instanceof Error){
      res.status(404).send({
        "error": err.name,
        "message": err.message,
      })
    }
  }

}

export default userListById;