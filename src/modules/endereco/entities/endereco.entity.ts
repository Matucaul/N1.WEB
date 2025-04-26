import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('Endereco')
export class Endereco {

  @PrimaryColumn()
  id: number;

  @Column()
  rua: string;
  
  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  complemento: string;

}
