import { Request, Response } from "express";
import { ItemsServices } from "../services/ItemsServices";

class ItemsController {
  async index(req: Request, res: Response): Promise<Response> {
    const itemsServices = new ItemsServices();

    const items = await itemsServices.findAll();

    return res.json(items);
  }
}

export { ItemsController };
