import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/produto';
import { Sabor } from 'src/app/models/sabor';
import { SaboresService } from 'src/app/services/sabores.service';

@Component({
  selector: 'app-saboreslist',
  templateUrl: './saboreslist.component.html',
  styleUrls: ['./saboreslist.component.scss']
})
export class SaboreslistComponent {

  lista: Sabor[] = [];

  @Output() retorno = new EventEmitter<Sabor[]>();
  @Input() modoLancamento: boolean = false;
  @Input() produto!: Produto;


  objetoSelecionadoParaEdicao: Sabor = new Sabor();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  saboresService = inject(SaboresService);

  constructor() {

    this.listAll();

  }


  listAll() {

    this.saboresService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;

        this.zerarSelecoes();

      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  zerarSelecoes() {
    if (this.lista != null)
      for (let i = 0; i < this.lista.length; i++) {
        this.lista[i].selecionado = false;
        this.lista[i].bloqueado = false;
      }
  }

  // MÉTODOS DA MODAL

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Sabor();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, sabor: Sabor, indice: number) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, sabor); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarSabor(sabor: Sabor) {

    this.listAll();

    this.modalRef.dismiss();
  }


  lancamento() {

    let listaTemp: Sabor[] = [];

    if (this.lista != null)
      for (let i = 0; i < this.lista.length; i++) {
        if (this.lista[i].selecionado)
          listaTemp.push(Object.assign({}, this.lista[i]));
      }

    this.retorno.emit(listaTemp);
  }


  verificarQuantidades() {

    let qtid = 0;

    if (this.lista != null)
      for (let i = 0; i < this.lista.length; i++) {
        this.lista[i].bloqueado = false;
        if (this.lista[i].selecionado)
          qtid++;
      }

    if (qtid == this.produto.maximoSabores) {

      if (this.lista != null)
        for (let i = 0; i < this.lista.length; i++) {
          if (!this.lista[i].selecionado)
            this.lista[i].bloqueado = true;
        }

    }

  }



}
