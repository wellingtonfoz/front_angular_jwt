import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SaboresdetailsComponent } from './saboresdetails.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Sabor } from 'src/app/models/sabor';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { SaboresService } from 'src/app/services/sabores.service';

describe('SaboresdetailsComponent', () => {
  let component: SaboresdetailsComponent;
  let fixture: ComponentFixture<SaboresdetailsComponent>;

  let saboresService: SaboresService;

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

  beforeEach(() => {
    saboresService = TestBed.inject(SaboresService);
  });

  it('deve chamar o método save ao enviar o formulário', fakeAsync(() => { //colocar o fakeAsync toda vez que rolar coisa assíncrona
    let spy = spyOn(saboresService, 'save').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit')); //disparar o mesmo evento que tá configurado na tag

    tick(); //simular uma demora assíncrona
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));


  it('deve chamar o método save ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(saboresService, 'save').and.callThrough();

    let sabor = new Sabor();
    sabor.nome = 'Catupiry';
    component.sabor = sabor;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(sabor);
  }));


});




