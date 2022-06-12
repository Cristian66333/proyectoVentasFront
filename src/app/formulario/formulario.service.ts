import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class FormularioService {

private backendURL:string ="http://localhost:8080/api/"
  constructor(
    private httpClient: HttpClient
  ) { }

  getClientes(): Observable<Cliente[]>{

    return this.httpClient.get<Cliente[]>(this.backendURL+"clientes");
  }
  getProductos(): Observable<Producto[]>{

    return this.httpClient.get<Producto[]>(this.backendURL+"productos");
  }

  addFactura(): Observable<any>{
    return this.httpClient.put(this.backendURL+"nuevaFactura",null);
  }

  addProducto(datos:string[]): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const data=JSON.stringify(datos);
    console.log(data);
    return this.httpClient.post<any[]>(this.backendURL + "crearDetalle", data, {'headers':headers , observe: 'response'});
  }
  refresh(): void {
    window.location.reload();
  }
}
