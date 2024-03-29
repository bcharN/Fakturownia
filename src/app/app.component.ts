import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: '../assets/styles/styles.scss'
})
export class AppComponent {
  title = 'Fakturownia'
}
