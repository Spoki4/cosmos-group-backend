import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column
} from "typeorm"
import { Product } from "./Product"
import { Stock } from "./Stock"

@Entity("product-storage")
export class ProductStorage {
  @PrimaryGeneratedColumn() id: number

  @OneToOne(type => Product)
  @JoinColumn()
  product: Promise<Product>

  @OneToOne(type => Stock)
  @JoinColumn()
  stock: Promise<Stock>

  @Column() rack: number
  @Column() place: number
  @Column() count: number
}
