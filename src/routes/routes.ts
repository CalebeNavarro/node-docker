import { Router } from "express";
import { authUser } from "../middlewares/authUser.middleware";

const routes = Router();

import userListByTokenController from "../controllers/user/userListByToken.controller";
import userCreateController from "../controllers/user/userCreate.controller"; 
import userListController from "../controllers/user/userList.controller";
import userListByIdService from "../controllers/user/userListById.controller"
import userDeleteController from "../controllers/user/userDelete.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import userUpdatePasswordController from "./../controllers/user/userUpdatPassword.controller";

import { userCreateSchema, validateUserCreate } from "./../middlewares/validateUserCreate.middleware";

routes.patch("/users/me", authUser, userUpdatePasswordController);

routes.get("/users/me", authUser, userListByTokenController);

routes.post("/users/signup", validateUserCreate(userCreateSchema), userCreateController);

routes.get("/users", authUser, userListController);

routes.get("/users/:user_id", userListByIdService);

routes.delete("/users/me", authUser, userDeleteController);

routes.post("/users/login", userLoginController);



export default routes;