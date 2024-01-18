import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router: Router) {
    
  }
}
