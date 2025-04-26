export declare class Pedido {
    id: string;
    clienteId: string;
    produtos: Array<{
        produtoId: number;
        quantidade: number;
    }>;
    status: 'pendente' | 'em_preparo' | 'em_entrega' | 'concluido' | 'cancelado';
    dataPedido: string;
    enderecoEntrega: string;
    pagamento: string;
    entregadorId: string;
    generateID(): void;
}
