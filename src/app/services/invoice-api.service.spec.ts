import { TestBed } from '@angular/core/testing';

import { InvoiceAPIService } from './invoice-api.service';

describe('InvoiceAPIService', () => {
  let service: InvoiceAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
