import { IsEnum, IsNotEmpty, IsNumber, IsString, IsDateString, Min } from 'class-validator';

export class CreatePagamentoDto {
  @IsString()
  @IsNotEmpty()
  pedidoId: string;

  @IsNumber()
  @Min(0)
  valorTotal: number;

  @IsEnum(['cartao', 'pix', 'boleto', 'dinheiro'])
  metodo: 'cartao' | 'pix' | 'boleto' | 'dinheiro';

  @IsEnum(['pendente', 'pago', 'cancelado'])
  status: 'pendente' | 'pago' | 'cancelado';

  @IsDateString()
  @IsNotEmpty()
  dataPagamento: string; 
}
