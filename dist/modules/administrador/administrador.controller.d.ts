import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
export declare class AdministradorController {
    private readonly administradorService;
    constructor(administradorService: AdministradorService);
    create(createAdministradorDto: CreateAdministradorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAdministradorDto: UpdateAdministradorDto): string;
    remove(id: string): string;
}
