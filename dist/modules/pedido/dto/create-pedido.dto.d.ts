declare class Produto {
    produtoId: string;
    quantidade: number;
}
export declare class CreatePedidoDto {
    clienteId: string;
    produtos: Produto[];
    status: 'pendente' | 'em_preparo' | 'em_entrega' | 'concluido' | 'cancelado';
    dataPedido: string;
    enderecoEntrega: string;
    pagamento: string;
    entregadorId: string;
}
export {};
