/* eslint-disable @typescript-eslint/consistent-type-imports */
import { CommonModule } from '@angular/common'
import { Component, Input, type OnInit } from '@angular/core'
import { DynamicInvoiceFormComponent } from '../dynamic-invoice-form/dynamic-invoice-form.component'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Formable } from '../../interfaces/formable'
import { InvoiceControlServiceService } from '../../services/invoice-control-service.service'
import { Sendable } from '../../interfaces/sendable'
import { InvoiceAPIService } from '../../services/invoice-api.service'
import { Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [RouterModule, CommonModule, DynamicInvoiceFormComponent, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: '../../../assets/styles/styles.scss'
})
export class DynamicFormComponent implements OnInit {
  @Input() invoiceObject!: Sendable
  form!: FormGroup
  entryForm!: FormGroup
  counterpartyForm!: FormGroup

  mainInvoiceParts!: Array<Formable<string | number | boolean>>
  invoiceEntryParts!: Array<Formable<string | number | boolean>>
  invoiceCounterpartyParts!: Array<Formable<string | number | boolean>>
  payLoad = ''
  constructor (private readonly ics: InvoiceControlServiceService, private readonly invoiceApiService: InvoiceAPIService, private readonly router: Router) {}
  ngOnInit () {
    this.mainInvoiceParts = this.invoiceObject.getFields()
    this.form = this.ics.toFormGroup(this.mainInvoiceParts)

    this.invoiceEntryParts = this.invoiceObject.getEntry()
    this.entryForm = this.ics.toFormGroup(this.invoiceEntryParts)

    this.invoiceCounterpartyParts = this.invoiceObject.getCounterparty()
    this.counterpartyForm = this.ics.toFormGroup(this.invoiceCounterpartyParts)

    console.log(this.form)
  }

  onSubmit () {
    this.invoiceObject.setFields(this.form.value)
    this.invoiceObject.setEntry(this.entryForm.value)
    this.invoiceObject.setCounterparty(this.counterpartyForm.value)

    console.log('sending from component' + this.invoiceObject.getSendableObject())
    this.invoiceApiService.sendInvoice(this.invoiceObject).subscribe({
      next: res => {
        console.log('success: ' + JSON.stringify(res))
        this.router.navigate(['/home'])
      },
      error: error => { console.log('error: ' + error) }
    })

    console.log(this.form.value)
    this.payLoad = this.form.getRawValue()
    console.log(this.payLoad)
  }
}
