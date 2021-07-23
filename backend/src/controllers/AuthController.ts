import { Request, Response } from "express";
import config from "../config/config";
import { AppError } from "../errors/AppError";
import { UsersService } from "../services/UsersServices";
import * as jwt from "jsonwebtoken";

class AuthController {
  async signIn(req: Request, res: Response): Promise<Response> {
    let { email, password } = req.body;

    const usersService = new UsersService();

    if (!(email && password))
      throw new AppError("Email and Password are required", 400);

    const user = await usersService.findByEmail(email);

    if (!user) throw new AppError("Email or Password are invalid", 401);

    if (!user.checkIfUnencryptedPasswordIsValid(password))
      throw new AppError("Unauthorized", 401);

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }
}

export { AuthController };
