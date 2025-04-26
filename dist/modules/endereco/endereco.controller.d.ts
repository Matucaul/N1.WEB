import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
export declare class EnderecoController {
    private readonly enderecoService;
    constructor(enderecoService: EnderecoService);
    create(createEnderecoDto: CreateEnderecoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEnderecoDto: UpdateEnderecoDto): string;
    remove(id: string): string;
}
