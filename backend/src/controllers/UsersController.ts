import { Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { UsersService } from "../services/UsersServices";

class UsersController {
  async index(req: Request, res: Response): Promise<Response> {
    const usersService = new UsersService();

    const users = await usersService.listAll();

    return res.json(users);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const usersService = new UsersService();

    const user = await usersService.getById(id);

    if (!user) throw new AppError("User did not found", 404);

    return res.json(user);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { email, password, firstName, lastName } = req.body;

    const usersService = new UsersService();

    const user = await usersService.findByEmail(email);

    if (!!user) throw new AppError("User already exists!", 409);

    const userCreated = await usersService.create(
      email,
      password,
      firstName,
      lastName
    );

    return res.json(userCreated);
  }
}

export { UsersController };
