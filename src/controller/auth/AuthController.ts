import { Repository, getConnectionManager } from "typeorm";
import { User } from "../../entity/User";
import {
  JsonController,
  Get,
  Post,
  Body,
  OnUndefined,
  OnNull,
  NotFoundError
} from "routing-controllers";
import {
  EntityFromParam,
  EntityFromBody
} from "typeorm-routing-controllers-extensions";
import { LoginBody } from "./LoginBody";

import * as crypto from "crypto";
import { Token } from "../../entity/Token";

@JsonController("/auth")
export class AuthController {
  private userRepository: Repository<User>;
  private tokenRepository: Repository<Token>;

  constructor() {
    this.userRepository = getConnectionManager()
      .get()
      .getRepository(User);

    this.tokenRepository = getConnectionManager()
      .get()
      .getRepository(Token);
  }

  @Post("/login")
  async login(@Body() loginBody: LoginBody) {
    const user = await this.userRepository.findOne({ login: loginBody.login });

    if (!user) throw new NotFoundError("User not found");

    const password = crypto
      .createHmac("sha1", process.env.PASSWORD_SALT)
      .update(loginBody.password)
      .digest("hex");

    if (user.password !== password) throw new NotFoundError("User not found");

    const token = crypto
      .createHmac("sha1", process.env.PASSWORD_SALT)
      .update(user.login)
      .update(user.password)
      .digest("hex");

    await this.tokenRepository.save({ token, user: Promise.resolve(user) });

    return {
      token,
      user: {
        login: user.login,
        permissions: (await user.permissions) || []
      }
    };
  }
}
