
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"

import {nanoid} from "nanoid";

@Entity('Pedido')
export class Pedido {

  @PrimaryColumn()
  id: string;

  @Column()
  clienteId: string;

  @Column('simple-json')
  produtos: Array<{ produtoId: number; quantidade: number }>;

  @Column()
  status: 'pendente' | 'em_preparo' | 'em_entrega' | 'concluido' | 'cancelado';

  @Column('datetime')
  dataPedido: string;

  @Column()
  enderecoEntrega: string;

  @Column()
  pagamento: string;

  @Column()
  entregadorId: string;

  @BeforeInsert()
  generateID(){
    this.id = `dev_${nanoid()}`;
  }


}


