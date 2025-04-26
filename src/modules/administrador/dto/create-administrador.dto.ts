import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { NivelAcesso } from '../entities/administrador.entity';

@Entity()
export class CreateAdministradorDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column({
    type: 'text', // necessário para SQLite
  })
  nivelAcesso: NivelAcesso;
}
