import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn
} from "typeorm";
import { Exclude } from "class-transformer";
import { Permission } from "./Permission";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column() login: string;
  @Column() password: string;

  @OneToMany(type => Permission, permission => permission.user)
  permissions: Promise<Permission[]>;
}
