
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"

import {nanoid} from "nanoid";

@Entity('produto')
export class Produto {

  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column('decimal')
  preco: string;

  @Column()
  categoria: string;

  @Column('int')
  estoque: number;

  @Column()
  fornecedorId: string;


  @BeforeInsert()
  generateID(){
    this.id = `dev_${nanoid()}`;
  }


}


