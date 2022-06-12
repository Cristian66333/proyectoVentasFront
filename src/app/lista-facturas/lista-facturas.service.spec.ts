import { TestBed } from '@angular/core/testing';

import { ListaFacturasService } from './lista-facturas.service';

describe('ListaFacturasService', () => {
  let service: ListaFacturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaFacturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
