import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsString()
  @IsNotEmpty()
  clienteId: string;

  @IsString()
  @IsNotEmpty()
  pedidoId: string;

  @IsNumber()
  @IsNotEmpty()
  nota: number;

  @IsString()
  @IsNotEmpty()
  comentario: string;

  @IsDateString()
  data: string = new Date().toISOString();  // Aqui você pode usar o formato de data ISO.
}
