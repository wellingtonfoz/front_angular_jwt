import { PedidoProduto } from "./pedidoproduto";

export class Pedido {
    id!: number;
    obs!: string;
    pedidoProdutoList!: PedidoProduto[];
}
