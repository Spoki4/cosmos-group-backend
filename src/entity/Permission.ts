import {
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  ManyToOne,
  Column,
  JoinColumn
} from "typeorm";
import { User } from "./User";

@Entity("permission")
export class Permission {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(type => User, user => user.permissions)
  user: Promise<User>;

  @Column() permission: string;
}
