import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

import {nanoid} from "nanoid";

@Entity ('categoria')
export class Categoria {

  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @BeforeInsert()
  generateID() {
    this.id = `dev_${nanoid()}`;
  }

}
