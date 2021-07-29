import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Order } from "./Order";

@Entity("items")
class Item {
  @PrimaryColumn()
  id: string;

  @Column()
  pokeId: number;

  @Column()
  pokeName: string;

  @Column()
  orderId: string;

  @CreateDateColumn()
  created_at: Date;

  @JoinColumn({ name: "orderId" })
  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Item };
