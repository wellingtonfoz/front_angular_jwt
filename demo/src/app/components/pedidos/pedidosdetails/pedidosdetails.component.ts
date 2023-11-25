import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedido';
import { PedidoProduto } from 'src/app/models/pedidoproduto';
import { Produto } from 'src/app/models/produto';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidosdetails',
  templateUrl: './pedidosdetails.component.html',
  styleUrls: ['./pedidosdetails.component.scss']
})
export class PedidosdetailsComponent {

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pedidosService = inject(PedidosService);

  @ViewChild('modalSabores') modalSabores!: ElementRef;
  pedidoProdutoSelecionado: PedidoProduto = new PedidoProduto();


  constructor() {

  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.pedidosService.save(this.pedido).subscribe({
      next: pedido => { // QUANDO DÁ CERTO
        this.retorno.emit(pedido);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }


  excluir(indice: number) {

    this.pedido.pedidoProdutoList.splice(indice, 1);

  }

  retornoProdutosList(produto: Produto) {

    if (this.pedido.pedidoProdutoList == null)
      this.pedido.pedidoProdutoList = [];

    let pedidoProduto = new PedidoProduto();
    pedidoProduto.produto = produto;

    this.pedido.pedidoProdutoList.push(pedidoProduto);
    this.modalRef.dismiss();

    if (produto.temSabores) {
      this.pedidoProdutoSelecionado = pedidoProduto;
      this.lancar(this.modalSabores, 'md');
    }
  }

  retornoSaboresList(sabores: any) {

    this.pedidoProdutoSelecionado.sabores = sabores;
    this.modalRef.dismiss();

  }


  lancar(modal: any, tamanhoJanela: string = 'lg') {
    this.modalRef = this.modalService.open(modal, { size: tamanhoJanela });
  }

}
