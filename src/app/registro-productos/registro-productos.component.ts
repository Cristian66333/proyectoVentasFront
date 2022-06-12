import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { Producto } from './producto';
import { RegistroProductosService } from './registro-productos.service'


@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.css']
})
export class RegistroProductosComponent implements OnInit {


  registros:Producto[]=[];
  constructor( private registroProductosService:RegistroProductosService) { }
  ngOnInit(): void {
    this.registroProductosService.getProductosFactura().subscribe(data => this.registros=data);
  }


}
