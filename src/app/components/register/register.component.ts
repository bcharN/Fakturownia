import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: '../../../assets/styles/styles.scss'
})
export class RegisterComponent {
  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {
    this.email = "";
    this.password = "";
  }

  register(registerFrom: NgForm): void {
    console.log("registration atempt email=" + this.email + " password=" + this.password);
    this.authService.registerWithEmail(this.email, this.password)
      .then((data) => {
        console.log(data);
        this.router.navigate(["/login"]);
      }).catch((error) => {
        alert(error);
      })
  }

}
