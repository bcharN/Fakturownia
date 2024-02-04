import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DynamicInvoiceFormComponent } from '../dynamic-invoice-form/dynamic-invoice-form.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Formable } from '../../interfaces/formable';
import { InvoiceControlServiceService } from '../../services/invoice-control-service.service';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, DynamicInvoiceFormComponent, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit{
  @Input() parts: Formable<string|number|boolean>[]=[];
  form!:FormGroup;
  payLoad='';
  constructor(private ics: InvoiceControlServiceService){}
  ngOnInit(){
    this.form = this.ics.toFormGroup(this.parts as Formable<string|number|boolean>[]);
    console.log(this.form);
    for (const val in this.form.controls){
      console.log();
    }
  }

  onSubmit(){
    this.payLoad = this.form.getRawValue();
    console.log(this.payLoad);
  }

}
