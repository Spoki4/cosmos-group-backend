import { PrimaryColumn, OneToOne, Entity, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity("tokens")
export class Token {
  @PrimaryColumn() token: string

  @OneToOne(type => User)
  @JoinColumn()
  user: Promise<User>
}
