import bcrypt from "bcryptjs";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Order } from "./Order";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  constructor() {
    if (!this.id) this.id = uuid();
  }

  hashPassword(password: string) {
    this.passwordHash = bcrypt.hashSync(password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.passwordHash);
  }
}

export { User };
