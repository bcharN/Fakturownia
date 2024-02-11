/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, Input, type OnInit } from '@angular/core'
import { type Sendable } from '../../interfaces/sendable'
import { type Formable } from '../../interfaces/formable'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-detail.component.html',
  styleUrl: '../../../assets/styles/styles.scss'
})
export class InvoiceDetailComponent implements OnInit {
  @Input() invoice!: Sendable
  invoiceMainData: Array<Formable<string | number | boolean>> = []
  invoiceEntry: Array<Formable<string | number | boolean>> = []
  invoiceCounterparty: Array<Formable<string | number | boolean>> = []

  ngOnInit () {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!this.invoice) { console.log('no invoice to take details from') }
    this.invoiceMainData = this.invoice.getFields()
    this.invoiceEntry = this.invoice.getEntry()
    this.invoiceCounterparty = this.invoice.getCounterparty()
  }
}
