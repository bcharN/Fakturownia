/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component, type OnInit } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: '../../../assets/styles/styles.scss'
})
export class HomePageComponent implements OnInit {
  constructor (private readonly authService: AuthService, private readonly router: Router) {

  }

  ngOnInit (): void {
    if (!this.authService.getUserLoggedInStatus()) {
      console.log('you need to login first!')
      // this.router.navigate(["/login"]);
    }
  }
}
