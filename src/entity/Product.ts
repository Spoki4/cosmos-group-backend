import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm"

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn() id: number

  @Column() name: string
  @Column() description: string
  @Column() width: number
  @Column() height: number
  @Column() length: number

  @CreateDateColumn() createdDate: Date
  @UpdateDateColumn() updateDate: Date
}
