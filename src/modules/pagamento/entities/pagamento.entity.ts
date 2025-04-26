
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"

import {nanoid} from "nanoid";
@Entity('Pagamento')
export class Pagamento {

  @PrimaryColumn()
  id: string;

  @Column()
  pedidoId: string;

  @Column('decimal')
  valorTotal: number;

  @Column()
  metodo: 'cartao' | 'pix' | 'boleto' | 'dinheiro';

  @Column()
  status: 'pendente' | 'pago' | 'cancelado';

  @Column('datetime')
  dataPagamento: string;

  @BeforeInsert()
  generateID(){
    this.id = `dev_${nanoid()}`;
  }


}

