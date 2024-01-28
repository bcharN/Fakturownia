import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInvoiceFormComponent } from './dynamic-invoice-form.component';

describe('DynamicInvoiceFormComponent', () => {
  let component: DynamicInvoiceFormComponent;
  let fixture: ComponentFixture<DynamicInvoiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicInvoiceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicInvoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
