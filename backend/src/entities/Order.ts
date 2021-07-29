import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Item } from "./Item";
import { User } from "./User";

@Entity("orders")
class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Item, (item) => item.order, { cascade: true })
  items: Item[];

  @JoinColumn({ name: "userId" })
  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Order };
