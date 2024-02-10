import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DynamicInvoiceFormComponent } from '../dynamic-invoice-form/dynamic-invoice-form.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Formable } from '../../interfaces/formable';
import { InvoiceControlServiceService } from '../../services/invoice-control-service.service';
import { Sendable } from '../../interfaces/sendable';
import { InvoiceAPIService } from '../../services/invoice-api.service';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, DynamicInvoiceFormComponent, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit{
  @Input() invoiceObject!: Sendable;
  form!:FormGroup;
  parts!:Formable<string|number|boolean>[];
  payLoad='';
  constructor(private ics: InvoiceControlServiceService, private invoiceApiService: InvoiceAPIService){}
  ngOnInit(){
    this.parts = this.invoiceObject.getFields();
    this.form = this.ics.toFormGroup(this.parts as Formable<string|number|boolean>[]);
    console.log(this.form);
    for (const val in this.form.controls){
      console.log(); 
    }
  }

  onSubmit(){
    this.invoiceObject.setValues(this.form.value);
    console.log("sending from component"+this.invoiceObject.getSendableObject());
    this.invoiceApiService.sendInvoice(this.invoiceObject).subscribe({
      next: res => console.log("success: "+JSON.stringify(res)),
      error: error=>console.log("error: "+error)
    })
       

    console.log(this.form.value);
    this.payLoad = this.form.getRawValue();
    console.log(this.payLoad);
  }

}
