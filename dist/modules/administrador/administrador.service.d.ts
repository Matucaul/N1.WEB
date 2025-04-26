import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
export declare class AdministradorService {
    create(createAdministradorDto: CreateAdministradorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAdministradorDto: UpdateAdministradorDto): string;
    remove(id: number): string;
}
