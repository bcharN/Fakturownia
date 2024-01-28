import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Formable } from '../../interfaces/formable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-invoice-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-invoice-form.component.html',
  styleUrl: './dynamic-invoice-form.component.scss'
})
export class DynamicInvoiceFormComponent {
  @Input() part!:Formable<string|number|boolean>;
  @Input() form!:FormGroup;

  get isValid(){
    return this.form.controls[this.part.key].valid;
  }


}
