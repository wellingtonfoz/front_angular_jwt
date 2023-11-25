import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  API: string = 'http://localhost:8080/api/pedido';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.API);
  }

  save(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.API, pedido);
  }


}
