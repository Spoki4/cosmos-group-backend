import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm"
import { Exclude } from "class-transformer"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn() id: number

  @Column() login: string
  @Column() password: string
  @Column() role: string

  @CreateDateColumn() createdDate: Date
  @UpdateDateColumn() updateDate: Date
}
