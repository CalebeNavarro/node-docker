import * as express from 'express'
import {IUserCreate} from "./../../interfaces/user";

declare global {
    namespace Express {
      interface Request {
        userEmail: string
        newUser: IUserCreate
      }
    }
}