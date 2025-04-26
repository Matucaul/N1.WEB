import { NivelAcesso } from '../entities/administrador.entity';
export declare class CreateAdministradorDto {
    id: number;
    nome: string;
    email: string;
    senha: string;
    nivelAcesso: NivelAcesso;
}
