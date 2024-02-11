import { Component, Input } from '@angular/core'
import { type FormGroup, ReactiveFormsModule } from '@angular/forms'
import { type Formable } from '../../interfaces/formable'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-dynamic-invoice-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-invoice-form.component.html',
  styleUrl: '../../../assets/styles/styles.scss'
})
export class DynamicInvoiceFormComponent {
  @Input() part!: Formable<string | number | boolean>
  @Input() form!: FormGroup

  get isValid (): boolean {
    return this.form.controls[this.part.key].valid
  }
}
