import { Component } from '@angular/core';
import { InvoiceControlServiceService } from '../../services/invoice-control-service.service';
import { InvoiceModelServiceService } from '../../services/invoice-model-service.service';
import { Observable } from 'rxjs';
import { Formable } from '../../interfaces/formable';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { Sendable } from '../../interfaces/sendable';
import { InvoiceAPIService } from '../../services/invoice-api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [DynamicFormComponent,RouterModule],
  templateUrl: './create-invoice.component.html',
  styleUrl: '../../../assets/styles/styles.scss',
  providers:[InvoiceModelServiceService]
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
