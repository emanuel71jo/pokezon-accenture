import { Request, Response } from "express";
import { OrdersServices } from "../services/OrdersServices";

class OrdersController {
  async index(req: Request, res: Response): Promise<Response> {
    const ordersService = new OrdersServices();

    const orders = await ordersService.findAll(req.body.user.userId);

    return res.json(orders);
  }

  async create(req: Request, res: Response): Promise<Response> {
    let { items } = req.body;

    const ordersService = new OrdersServices();

    const order = await ordersService.create(req.body.user.userId, items);

    return res.json(order);
  }
}

export { OrdersController };
