import { Request, Response, NextFunction} from 'express';
import { IUserCreate } from '../interfaces/user';

import * as yup from "yup";
import { SchemaOf } from 'yup';
import bcrypt from "bcrypt";

export const userCreateSchema: SchemaOf<IUserCreate> = yup.object().shape({
  name: yup.string().required().transform((_, originValue) => originValue.toLowerCase()),
  email: yup.string().email().required().transform((_, originalValue) => originalValue.toLowerCase()),
  password: yup.string().required().transform((_, originalValue) => bcrypt.hashSync(originalValue, 10)),
  age: yup.number().required()
})

export const validateUserCreate = (schema: SchemaOf<IUserCreate>) => {
  return async (
    req: Request, 
    res: Response, 
    next: NextFunction) => {
    
    try {
        
        const data = req.body;

        try {
          const validatedData = await schema.validate(
              data, 
              { 
                  abortEarly: false,
                  stripUnknown: true
              })
            req.newUser = validatedData;
            next();

        } catch (err: any) {
            return res.status(400).json({
                error: err.errors?.join(', ')
            });
        }

    } catch (err) {

        next(err);
    }
  }
}