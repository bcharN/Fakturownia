import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isUserLoggedIn:boolean;
email!:string;
password!:string;
  constructor() { 
    this.isUserLoggedIn=false;
  }


  loginWithEmail(email:string, password:string): Promise<string>{
    return new Promise((resolve, reject)=>{
      if ( email==this.email && password== this.password){
        this.isUserLoggedIn=true;
        resolve("Logged in");
      }
      else{
        this.isUserLoggedIn=false;
        reject("Error logging in! Try again")
      }
    });
  }
  registerWithEmail(email:string, password:string): Promise<string>{
    return new Promise((resolve, reject)=>{
      this.email=email;
      this.password=password
      resolve("registered correctly")
    });
  }

  logout():Promise<string>{
    return new Promise((resolve,reject)=>{
      this.isUserLoggedIn=false;
      resolve("succesfuly logged out :)");
    })
  }

  getUserLoggedInStatus():boolean{
    return this.isUserLoggedIn;
  }

  //getAPIToken():String{}


}
