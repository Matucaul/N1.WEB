import { IsEnum, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateEntregadorDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsPhoneNumber()  
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  veiculo: string;

  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsEnum(['disponível', 'ocupado', 'offline'])
  statusDisponibilidade: 'disponível' | 'ocupado' | 'offline' = 'offline'; 
}
