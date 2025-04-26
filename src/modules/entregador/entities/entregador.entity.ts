
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"

import {nanoid} from "nanoid";

@Entity('entregador')
export class Entregador {

  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  veiculo: string;

  @Column()
  placa: string;

  @Column()
  statusDisponibilidade: 'disponível' | 'ocupado' | 'offline' = 'offline'

  @BeforeInsert()
  generateID(){
    this.id = `dev_${nanoid()}`;
  }


}

