import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async listAll(): Promise<User[]> {
    const users = await this.usersRepository.find({
      select: [
        "id",
        "firstName",
        "lastName",
        "email",
        "fileName",
        "created_at",
      ],
    });

    return users;
  }

  async getById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id },
      select: [
        "id",
        "firstName",
        "lastName",
        "fileName",
        "email",
        "created_at",
      ],
    });

    return user;
  }

  async create(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    fileName: string
  ): Promise<User> {
    const userExists = await this.usersRepository.findOne({ email });

    if (userExists) throw new AppError("User already exists!", 401);

    const user = new User();
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.fileName = fileName;
    user.hashPassword(password);

    const userCreated = this.usersRepository.create(user);

    await this.usersRepository.save(userCreated);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }
}

export { UsersService };
