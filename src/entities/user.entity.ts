import { Entity, Column, PrimaryColumn } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;
  

  @Column({type: "varchar", width: 511})
  name: string;

  @Column({type: "varchar", width: 255})
  email: string;

  @Column({type: "varchar", width: 511, select: false})
  password: string;

  @Column("int")
  age: number

  @Column("timestamp")
  created_at: Date

  @Column("timestamp")
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (!this.created_at) {
      this.created_at = new Date()
    }
    if (!this.updated_at) {
      this.updated_at = new Date()
    }
  }
}