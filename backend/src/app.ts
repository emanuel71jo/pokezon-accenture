import "reflect-metadata";
import "express-async-errors";
import "./database";

import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError)
      return response.status(err.statusCode).json({ message: err.message });

    return response.status(500).json({
      status: "Error",
      message: `Internal Server Error ${err.message}`,
    });
  }
);

export { app };
