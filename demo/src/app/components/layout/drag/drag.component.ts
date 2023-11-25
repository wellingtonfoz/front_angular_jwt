import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { ElementoDeArrastar } from 'src/app/models/elementodearrastar';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss'],
})
export class DragComponent {

  lista: ElementoDeArrastar[] = [];
  animais: ElementoDeArrastar[] = [];
  carros: ElementoDeArrastar[] = [];

  arrastando: boolean = false;
  mensagemColisao: string = '';

  acertos: number = 0;
  erros: number = 0;

  constructor() {
    this.lista.push(new ElementoDeArrastar('assets/imagens/gato.png', 'animal'));
    this.lista.push(new ElementoDeArrastar('assets/imagens/carro.png', 'carro'));
    this.lista.push(new ElementoDeArrastar('assets/imagens/cachorro.png', 'animal'));
  }

  drop(event: CdkDragDrop<ElementoDeArrastar[]>) {

    let objetoArrastado: ElementoDeArrastar = event.previousContainer.data[event.previousIndex];
    let containerOrigem: CdkDropList = event.previousContainer;
    let containerDestino: CdkDropList = event.container;

    if (event.previousContainer === event.container) {
      //não trocou de container, só de posição no mesmo container
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      //trocou de container
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.verificarAcertosEErros(); //tem que ser depois de transferir
    }

  }

  onDragOver(event: any) {
    if (this.arrastando) {
      if (event.target.id == 'animal')
        this.mensagemColisao = 'Colidindo com a lista de Animais';
      if (event.target.id == 'carro')
        this.mensagemColisao = 'Colidindo com a lista de Carros';
    }
  }

  onDragOut(event: any) {
    this.mensagemColisao = '';
  }


  verificarAcertosEErros() {
    this.acertos = 0;
    this.erros = 0;

    //VERIFICANDO ACERTO E ERROS DE CARROS
    if (this.carros != null)
      for (let i = 0; i < this.carros.length; i++) {
        if (this.carros[i].tipo == 'carro')
          this.acertos++;
        else
          this.erros++;
      }

    //VERIFICANDO ACERTO E ERROS DE ANIMAIS
    if (this.animais != null)
      for (let i = 0; i < this.animais.length; i++) {
        if (this.animais[i].tipo == 'animal')
          this.acertos++;
        else
          this.erros++;
      }


  }


}
