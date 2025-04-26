import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { nanoid } from 'nanoid';

export enum NivelAcesso {
  GERENTE = 'gerente',
  SUPORTE = 'suporte',
  FINANCEIRO = 'financeiro',
}

@Entity('administrador')
export class Administrador {
  @PrimaryColumn()
  public id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column({
    type: 'text',
    enum: NivelAcesso,
    default: NivelAcesso.SUPORTE,
  })
  nivelAcesso: NivelAcesso;

  @BeforeInsert()
  generateId() {
    this.id = `dev_${nanoid()}`;
  }
}
