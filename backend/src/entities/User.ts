import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import bcrypt from "bcryptjs";

import { v4 as uuid } from "uuid";

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
