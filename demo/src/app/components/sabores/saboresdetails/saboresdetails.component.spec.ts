import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SaboresdetailsComponent } from './saboresdetails.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Sabor } from 'src/app/models/sabor';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('SaboresdetailsComponent', () => {
  let component: SaboresdetailsComponent;
  let fixture: ComponentFixture<SaboresdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SaboresdetailsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(SaboresdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  beforeEach(() => { //MOCANDO DADOS
    let sabor = new Sabor();
    sabor.id = 1;
    sabor.nome = 'Catupiry';
    component.sabor = sabor;
    fixture.detectChanges(); //refresh
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Teste de 1 @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).toEqual('Catupiry');
  });


  it('Teste 2 de @Input - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });


  beforeEach(() => { //MOCANDO DADOS
    let sabor = new Sabor();
    sabor.id = 1;
    sabor.nome = 'Pizza';

    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(sabor));
    spyOn(httpSpy, 'put').and.returnValue(of(sabor));

    fixture.detectChanges(); //refresh
  });


  it('Teste de @Output() retorno', fakeAsync(() => {
    //let elemento = fixture.debugElement.query(By.css('button[name="botao"]'));
    spyOn(component.retorno, 'emit');
    //elemento.triggerEventHandler('click', null);
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));



});




