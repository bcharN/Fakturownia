/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: '../../../assets/styles/styles.scss'
})
export class LandingPageComponent {
  constructor (private readonly router: Router) {

  }
}
