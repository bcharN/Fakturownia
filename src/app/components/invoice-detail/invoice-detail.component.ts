import { Component, Input, OnInit } from '@angular/core';
import { Sendable } from '../../interfaces/sendable';
import { Formable } from '../../interfaces/formable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-detail.component.html',
  styleUrl: '../../../assets/styles/styles.scss'
})
export class InvoiceDetailComponent implements OnInit{

  @Input() invoice!:Sendable;
  invoiceMainData:Formable<string|number|boolean>[]=[];
  invoiceEntry:Formable<string|number|boolean>[]=[];
  invoiceCounterparty:Formable<string|number|boolean>[]=[];

  constructor(){}
  ngOnInit(){
    if (!this.invoice){console.log("no invoice to take details from")}
    this.invoiceMainData=this.invoice.getFields();
    this.invoiceEntry=this.invoice.getEntry();
    this.invoiceCounterparty=this.invoice.getCounterparty();
  }
}
