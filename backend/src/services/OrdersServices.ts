import { getCustomRepository, Repository } from "typeorm";
import { Item } from "../entities/Item";
import { Order } from "../entities/Order";
import { User } from "../entities/User";
import { AppError } from "../errors/AppError";
import { OrdersRepository } from "../repositories/OrdersRepository";
import { UsersRepository } from "../repositories/UsersRepository";

class OrdersServices {
  private ordersRepository: Repository<Order>;
  private usersRepository: Repository<User>;

  constructor() {
    this.ordersRepository = getCustomRepository(OrdersRepository);
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async findAll(userId: string): Promise<Order[]> {
    const orders = await this.ordersRepository.find({
      where: { userId },
      relations: ["items"],
    });
    return orders;
  }

  async create(userId: string, items: Item[]): Promise<Order> {
    const userExists = await this.usersRepository.findOne({
      where: { id: userId },
    });

    if (!userExists) throw new AppError("User did not found!", 404);

    const order = new Order();
    order.userId = userId;
    order.items = items;

    const orderCreated = this.ordersRepository.create(order);

    await this.ordersRepository.save(orderCreated);

    return orderCreated;
  }
}

export { OrdersServices };
