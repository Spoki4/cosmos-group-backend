import { Repository, getConnectionManager } from "typeorm";
import { User } from "../entity/User";
import { JsonController, Get } from "routing-controllers";
import { EntityFromParam } from "typeorm-routing-controllers-extensions";

@JsonController()
export class AuthController {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getConnectionManager()
      .get()
      .getRepository(User);
  }

  @Get("/users/:id")
  getOne(@EntityFromParam("id") user: User) {
    return user;
  }

  @Get("/users")
  async getAll() {
    return await this.userRepository.find();
  }
}
