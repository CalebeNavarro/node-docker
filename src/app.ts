import express, { NextFunction, Request, Response } from "express";

import { AppError } from "./errors/appError";
import routes from "./routes/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, _: Request, response: Response, __: NextFunction) => {
  
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    })
  }

  console.log(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });

});

export default app;