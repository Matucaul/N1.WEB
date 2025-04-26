export declare class CreatePagamentoDto {
    pedidoId: string;
    valorTotal: number;
    metodo: 'cartao' | 'pix' | 'boleto' | 'dinheiro';
    status: 'pendente' | 'pago' | 'cancelado';
    dataPagamento: string;
}
