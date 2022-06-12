import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FacturaComponent } from './factura/factura.component';
import { ListaFacturasComponent } from './lista-facturas/lista-facturas.component';
import { RegistroProductosComponent } from './registro-productos/registro-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioService } from './formulario/formulario.service';
import { ListaFacturasService } from './lista-facturas/lista-facturas.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FacturaComponent,
    ListaFacturasComponent,
    RegistroProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FormularioService, ListaFacturasComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
