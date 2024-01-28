import { TestBed } from '@angular/core/testing';

import { InvoiceModelServiceService } from './invoice-model-service.service';

describe('InvoiceModelServiceService', () => {
  let service: InvoiceModelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceModelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
