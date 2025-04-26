import { IsArray, IsEnum, IsNotEmpty, IsString, IsDateString, IsUUID, ValidateNested, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

class Produto {
  @IsNotEmpty()
  @IsUUID()
  produtoId: string;

  @IsNotEmpty()
  @IsString()
  quantidade: number;
}

export class CreatePedidoDto {
  @IsUUID()
  @IsNotEmpty()
  clienteId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Produto)
  produtos: Produto[];

  @IsEnum(['pendente', 'em_preparo', 'em_entrega', 'concluido', 'cancelado'])
  status: 'pendente' | 'em_preparo' | 'em_entrega' | 'concluido' | 'cancelado';

  @IsDateString()
  @IsNotEmpty()
  dataPedido: string; 

  @IsString()
  @IsNotEmpty()
  enderecoEntrega: string;

  @IsString()
  @IsNotEmpty()
  pagamento: string;

  @IsUUID()
  @IsNotEmpty()
  entregadorId: string;
}
