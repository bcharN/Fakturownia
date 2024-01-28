import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isUserLoggedIn:Boolean;
  constructor() { 
    this.isUserLoggedIn=false;
  }


  loginWithEmail(email:String, password:String): Promise<String>{
    return new Promise((resolve, reject)=>{
      if ( email=="jan@example.com" && password== "1234"){
        this.isUserLoggedIn=true;
        resolve("Logged in");
      }
      else{
        this.isUserLoggedIn=false;
        reject("Error logging in! Try again")
      }
    });
  }

  logout():Promise<String>{
    return new Promise((resolve,reject)=>{
      this.isUserLoggedIn=false;
      resolve("succesfuly logged out :)");
    })
  }

  getUserLoggedInStatus():Boolean{
    return this.isUserLoggedIn;
  }

  //getAPIToken():String{}


}
