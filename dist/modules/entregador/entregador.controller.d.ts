import { EntregadorService } from './entregador.service';
import { CreateEntregadorDto } from './dto/create-entregador.dto';
import { UpdateEntregadorDto } from './dto/update-entregador.dto';
export declare class EntregadorController {
    private readonly entregadorService;
    constructor(entregadorService: EntregadorService);
    create(createEntregadorDto: CreateEntregadorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEntregadorDto: UpdateEntregadorDto): string;
    remove(id: string): string;
}
