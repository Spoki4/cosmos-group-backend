import { PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm"

export class Employee {
  @PrimaryGeneratedColumn() id: number

  @Column() fullName: string

  @Column() position: string

  @Column() salary: number
  @Column() salaryAfterTax: number
}
