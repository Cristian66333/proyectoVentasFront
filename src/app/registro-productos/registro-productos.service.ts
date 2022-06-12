import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroProductosService {
  private backendURL:string ="http://localhost:8080/api/"
    constructor(
      private httpClient: HttpClient
    ) { }
    getProductosFactura(): Observable<Producto[]>{
      return this.httpClient.get<Producto[]>(this.backendURL + "productosFactura");
    }
}
