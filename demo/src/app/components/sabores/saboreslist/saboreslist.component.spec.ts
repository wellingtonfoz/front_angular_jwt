import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SaboreslistComponent } from './saboreslist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SaboreslistComponent', () => { //GRUPO DE TESTES DE UM COMPONENTE
  let component: SaboreslistComponent;
  let fixture: ComponentFixture<SaboreslistComponent>;

  beforeEach(() => { //PREPARA AS DEPENDÊNCIAS INTERNAS PARA O TESTE

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], //SE O COMPONENTE INVOCA ALGUM SERVICE, INCLUÍMOS ESSA DEPENDÊNCIA DE HTTP DE TESTE
      declarations: [SaboreslistComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  //PARA QUE O KARMA NÃO CONFUNDA ELEMENTOS ANGULAR NO TEMPLATE COMO ERROS
      ]
    });
    fixture = TestBed.createComponent(SaboreslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  //CASO DE TESTE 1
  it('Teste 1 - criação ok do componente', () => {
    expect(component).toBeTruthy();
  });
/*
  it('Teste 2 - existência da tag table', () =>{
    const html = fixture.nativeElement as HTMLElement;
    expect(html.querySelector('.container')?.textContent).toContain('table');
  });
*/


});

