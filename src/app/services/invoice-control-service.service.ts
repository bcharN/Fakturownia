import { Injectable } from '@angular/core';
import { Formable } from '../interfaces/formable';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class InvoiceControlServiceService {
  toFormGroup(invoiceParts : Formable<number|string|boolean>[]){
    const group: any = {};
    invoiceParts.forEach(part => {
      console.log(part);
      group[part.key] = part.validationRequired 
        ? new FormControl(part.value || '', Validators.required)
        : new FormControl(part.value || '');
    });
    return new FormGroup(group);
  }
  constructor() { }
}
