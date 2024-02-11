import { Component } from '@angular/core'
import { InvoiceModelServiceService } from '../../services/invoice-model-service.service'
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component'
import { type Sendable } from '../../interfaces/sendable'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [DynamicFormComponent, RouterModule],
  templateUrl: './create-invoice.component.html',
  styleUrl: '../../../assets/styles/styles.scss',
  providers: [InvoiceModelServiceService]
})
export class CreateInvoiceComponent {
  // parts$:Observable<Formable<string|number|boolean>[]>;
  invoiceObject!: Sendable
  constructor (private readonly ims: InvoiceModelServiceService) {
    ims.getInvoiceByType('faktura-krajowa').subscribe({
      next: (value: Sendable | null) => {
        if (value != null) {
          this.invoiceObject = value
        } else { console.log('loaded null invoice') }
      },
      error: _error => {
        console.log('error loading invoice model')
      }
    })
  }
}
