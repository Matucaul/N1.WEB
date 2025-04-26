import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"

import {nanoid} from "nanoid";

@Entity('avaliacao')
export class Avaliacao {

  @PrimaryColumn()
  id: string;

  @Column()
  clienteId: string;

  @Column()
  pedidoId: string;

  @Column()
  nota: number;

  @Column()
  comentario: string;

  @Column()
  data: Date = new Date()

  @BeforeInsert()
  generateID(){
    this.id = `dev_${nanoid()}`;
    this.data = new Date();
  }


}
