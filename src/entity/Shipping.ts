import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn
} from "typeorm"
import { Receive } from "./Receive"

@Entity()
export class Shipping {
  @PrimaryGeneratedColumn() id: number

  @OneToOne(type => Receive)
  @JoinColumn()
  receive: Promise<Receive>

  @CreateDateColumn() createdDate: Date
}
