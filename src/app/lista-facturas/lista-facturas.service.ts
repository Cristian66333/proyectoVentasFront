import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Factura } from './factura';

@Injectable({
  providedIn: 'root'
})
export class ListaFacturasService {
  private backendURL:string ="http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }
  getFacturas(): Observable<Factura[]>{
    return this.httpClient.get<Factura[]>(this.backendURL+"facturas");
  }
}
