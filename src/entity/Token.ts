import { PrimaryColumn, OneToOne, Entity, JoinTable } from "typeorm";
import { User } from "./User";

@Entity("tokens")
export class Token {
  @PrimaryColumn() token: string;

  @OneToOne(type => User)
  @JoinTable()
  user: Promise<User>;
}
