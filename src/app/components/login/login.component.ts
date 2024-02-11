import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: '../../../assets/styles/styles.scss'
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {
    this.email = "";
    this.password = "";
  }

  login(loginForm: NgForm): void {
    console.log("login atempt email=" + this.email + " password=" + this.password);
    this.authService.loginWithEmail(this.email, this.password)
      .then((data) => {
        console.log(data);
        this.router.navigate(["/home"]);
      }).catch((error) => {
        alert(error);
      })
  }

 
}
