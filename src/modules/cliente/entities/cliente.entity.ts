import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

import {nanoid} from "nanoid";

@Entity('cliente')
export class Cliente {

  @PrimaryColumn()
  id: string;
  
  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  telefone: string;

  @Column()
  endereco: string;

  @Column()
  criadoEm: Date = new Date();

  @BeforeInsert()
  generateID() {
    this.id = `dev_${nanoid()}`;
  }

}
