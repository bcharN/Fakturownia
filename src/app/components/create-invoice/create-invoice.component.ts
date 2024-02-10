import { Component } from '@angular/core';
import { InvoiceControlServiceService } from '../../services/invoice-control-service.service';
import { InvoiceModelServiceService } from '../../services/invoice-model-service.service';
import { Observable } from 'rxjs';
import { Formable } from '../../interfaces/formable';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { Sendable } from '../../interfaces/sendable';
import { InvoiceAPIService } from '../../services/invoice-api.service';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.scss',
  providers:[InvoiceModelServiceService, InvoiceAPIService]
})
export class CreateInvoiceComponent {
  //parts$:Observable<Formable<string|number|boolean>[]>;
  invoiceObject!:Sendable;
  constructor(private ims:InvoiceModelServiceService){
    ims.getInvoiceByType("faktura-krajowa").subscribe({
      next: (value: Sendable|null) => {
        if (value){
          this.invoiceObject = value;}
        else{console.log("loaded null invoice");}
      },
      error: error=>{
        console.log("error loading invoice model");
      }
  });
  }


}
