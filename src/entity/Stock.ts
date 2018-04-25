import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("stocks")
export class Stock {
  @PrimaryGeneratedColumn() id: number

  @Column() name: string
  @Column() address: string

  @Column() size: number
}
