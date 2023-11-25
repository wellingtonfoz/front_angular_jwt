import { Pedido } from "./pedido";
import { Produto } from "./produto";
import { Sabor } from "./sabor";

export class PedidoProduto {
    id!: number;
    pedido!: Pedido;
    produto!: Produto;
    sabores!: Sabor[];
}
