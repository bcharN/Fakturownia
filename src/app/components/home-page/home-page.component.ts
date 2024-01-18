import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  constructor(private authService:AuthService, private router:Router){

  }
  ngOnInit(): void {
      if(!this.authService.getUserLoggedInStatus()){
        alert("you need to login first!");
        this.router.navigate(["/login"]);
      }
  }
}
