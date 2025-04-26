import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsPhoneNumber()  
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  endereco: string;

  criadoEm: Date = new Date();  
}
