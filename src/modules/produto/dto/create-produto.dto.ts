import { IsNotEmpty, IsString, IsNumber, Min, IsUUID, IsDecimal } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsDecimal()
  @Min(0)
  preco: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsNumber()
  @Min(0)
  estoque: number;

  @IsUUID()
  @IsNotEmpty()
  fornecedorId: string;
}
