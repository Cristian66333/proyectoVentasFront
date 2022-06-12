import { Component, OnInit } from '@angular/core';
import { ListaFacturasService } from './lista-facturas.service';
import { Factura } from './factura';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css']
})
export class ListaFacturasComponent implements OnInit{

  facturas:Factura[]=[];

  constructor(private listaFacturasService: ListaFacturasService) { }
  ngOnInit(): void {
    this.listaFacturasService.getFacturas().subscribe(dataFacturas => this.facturas=dataFacturas);
  }

}
