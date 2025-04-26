export declare class Pagamento {
    id: string;
    pedidoId: string;
    valorTotal: number;
    metodo: 'cartao' | 'pix' | 'boleto' | 'dinheiro';
    status: 'pendente' | 'pago' | 'cancelado';
    dataPagamento: string;
    generateID(): void;
}
