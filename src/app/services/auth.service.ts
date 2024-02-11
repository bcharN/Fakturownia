import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean
  email!: string
  password!: string
  constructor () {
    this.isUserLoggedIn = false
  }

  async loginWithEmail (email: string, password: string): Promise<string> {
    return await new Promise((resolve, reject) => {
      // eslint-disable-next-line eqeqeq
      if (email == this.email && password == this.password) {
        this.isUserLoggedIn = true
        resolve('Logged in')
      } else {
        this.isUserLoggedIn = false
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Error logging in! Try again')
      }
    })
  }

  async registerWithEmail (email: string, password: string): Promise<string> {
    return await new Promise((resolve, reject) => {
      this.email = email
      this.password = password
      resolve('registered correctly')
    })
  }

  async logout (): Promise<string> {
    return await new Promise((resolve, reject) => {
      this.isUserLoggedIn = false
      resolve('succesfuly logged out :)')
    })
  }

  getUserLoggedInStatus (): boolean {
    return this.isUserLoggedIn
  }

  // getAPIToken():String{}
}
