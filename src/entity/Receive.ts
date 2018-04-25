import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm"
import { Product } from "./Product"

@Entity()
export class Receive {
  @PrimaryGeneratedColumn() id: number

  @OneToOne(type => Product)
  @JoinColumn()
  product: Promise<Product>

  @CreateDateColumn() createdDate: Date
  @UpdateDateColumn() updateDate: Date
}
