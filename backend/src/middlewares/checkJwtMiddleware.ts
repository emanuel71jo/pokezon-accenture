import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
import { AppError } from "../errors/AppError";

export function checkJwt(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const bearerToken = <string>req.headers["authorization"];

  try {
    const [, token] = bearerToken.split("Bearer ");

    const jwtPayload = jwt.verify(token, config.jwtSecret);

    req.body.user = jwtPayload;

    return next();
  } catch (error) {
    throw new AppError("Unauthorized or token is missing!", 401);
  }
}
