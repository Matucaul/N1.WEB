import { CreateEntregadorDto } from './dto/create-entregador.dto';
import { UpdateEntregadorDto } from './dto/update-entregador.dto';
export declare class EntregadorService {
    create(createEntregadorDto: CreateEntregadorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEntregadorDto: UpdateEntregadorDto): string;
    remove(id: number): string;
}
