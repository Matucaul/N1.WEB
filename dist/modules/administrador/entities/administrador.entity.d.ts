export declare enum NivelAcesso {
    GERENTE = "gerente",
    SUPORTE = "suporte",
    FINANCEIRO = "financeiro"
}
export declare class Administrador {
    id: string;
    nome: string;
    email: string;
    senha: string;
    nivelAcesso: NivelAcesso;
    generateId(): void;
}
