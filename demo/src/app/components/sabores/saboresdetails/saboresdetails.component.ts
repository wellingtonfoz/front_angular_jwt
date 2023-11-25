import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sabor } from 'src/app/models/sabor';
import { SaboresService } from 'src/app/services/sabores.service';

@Component({
  selector: 'app-saboresdetails',
  templateUrl: './saboresdetails.component.html',
  styleUrls: ['./saboresdetails.component.scss']
})
export class SaboresdetailsComponent {

  @Input() sabor: Sabor = new Sabor();
  @Output() retorno = new EventEmitter<Sabor>();

  saboresService = inject(SaboresService);


  constructor() {

  }

  salvar() {

    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ
    this.saboresService.save(this.sabor).subscribe({
      next: sabor => { // QUANDO DÁ CERTO
        this.retorno.emit(sabor);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }

}

