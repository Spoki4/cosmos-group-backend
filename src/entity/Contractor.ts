import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("contractors")
export class Contractor {
  @PrimaryGeneratedColumn() id: number

  @Column() name: string
  @Column() address: string
}
