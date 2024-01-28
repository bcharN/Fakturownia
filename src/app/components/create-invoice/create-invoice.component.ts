import { Component } from '@angular/core';
import { InvoiceControlServiceService } from '../../services/invoice-control-service.service';
import { InvoiceModelServiceService } from '../../services/invoice-model-service.service';
import { Observable } from 'rxjs';
import { Formable } from '../../interfaces/formable';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.scss',
  providers:[InvoiceModelServiceService]
})
export class CreateInvoiceComponent {
  //parts$:Observable<Formable<string|number|boolean>[]>;
  parts:Formable<string|number|boolean>[]|null;
  constructor(private ims:InvoiceModelServiceService){
    this.parts = ims.getInvoiceByType("faktura-krajowa");
  }


}
