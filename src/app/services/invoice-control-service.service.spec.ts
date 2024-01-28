import { TestBed } from '@angular/core/testing';

import { InvoiceControlServiceService } from './invoice-control-service.service';

describe('InvoiceControlServiceService', () => {
  let service: InvoiceControlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceControlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
