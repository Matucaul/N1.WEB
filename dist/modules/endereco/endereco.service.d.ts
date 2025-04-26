import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
export declare class EnderecoService {
    create(createEnderecoDto: CreateEnderecoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEnderecoDto: UpdateEnderecoDto): string;
    remove(id: number): string;
}
