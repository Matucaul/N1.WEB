
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"

import {nanoid} from "nanoid";

@Entity('fornecedor')
export class Fornecedor {

  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  cnpj: string;

  @Column()
  endereco: string;

  @Column()
  email: string;

  @BeforeInsert()
  generateID(){
    this.id = `dev_${nanoid()}`;
  }


}

