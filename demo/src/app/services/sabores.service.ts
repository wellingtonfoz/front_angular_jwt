import { Sabor } from './../models/sabor';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaboresService {

  API: string = 'http://localhost:8080/api/sabor';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API);
  }

  save(sabor: Sabor): Observable<Sabor> {
    return this.http.post<Sabor>(this.API, sabor);
  }


}
