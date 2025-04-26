export declare class Entregador {
    id: string;
    nome: string;
    telefone: string;
    veiculo: string;
    placa: string;
    statusDisponibilidade: 'disponível' | 'ocupado' | 'offline';
    generateID(): void;
}
