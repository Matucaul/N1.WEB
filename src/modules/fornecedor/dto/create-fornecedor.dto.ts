import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateFornecedorDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, { message: 'CNPJ inválido. Use o formato XX.XXX.XXX/XXXX-XX' })
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
