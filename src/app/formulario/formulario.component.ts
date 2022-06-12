import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Producto } from './producto';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit  {

  clienteSeleccionado:string="";
  productoSeleccionado:string="";
  cantidadSeleccionada:number=0;
  clientes: Cliente[]=[];
  productos:Producto[]=[];

  constructor(private formularioService: FormularioService) {}
  ngOnInit(): void {
    this.formularioService.getClientes().subscribe(

      userData => {this.clientes = userData}
    );
    this.formularioService.getProductos().subscribe(dataProductos => {this.productos = dataProductos});

  }


  addFactura(){
    this.formularioService.addFactura().subscribe();
    this.formularioService.refresh();
  }
  addProducto(){

    this.formularioService.addProducto([this.clienteSeleccionado, this.productoSeleccionado, ""+this.cantidadSeleccionada]).subscribe();

  }


}
