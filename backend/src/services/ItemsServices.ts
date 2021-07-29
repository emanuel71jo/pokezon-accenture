import { getCustomRepository, Repository } from "typeorm";
import { Item } from "../entities/Item";
import { Order } from "../entities/Order";
import { AppError } from "../errors/AppError";
import { ItemsRepository } from "../repositories/ItemsRepository";
import { OrdersRepository } from "../repositories/OrdersRepository";

class ItemsServices {
  private itemsRepository: Repository<Item>;
  private ordersRepository: Repository<Order>;

  constructor() {
    this.ordersRepository = getCustomRepository(OrdersRepository);
    this.itemsRepository = getCustomRepository(ItemsRepository);
  }

  async findAll(): Promise<Item[]> {
    const items = await this.itemsRepository.find();

    return items;
  }

  async create(
    pokeId: number,
    pokeName: string,
    orderId: string
  ): Promise<Item> {
    const orderExists = await this.ordersRepository.findOne({
      where: { id: orderId },
    });

    if (!orderExists) throw new AppError("Order did not found!", 404);

    const item = new Item();
    item.orderId = orderId;
    item.pokeId = pokeId;
    item.pokeName = pokeName;

    const itemCreated = this.itemsRepository.create(item);

    await this.itemsRepository.save(itemCreated);

    return itemCreated;
  }
}

export { ItemsServices };
