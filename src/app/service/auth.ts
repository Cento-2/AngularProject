import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private isLoggedIn: boolean = true
   isAuthenticated(): boolean {
    return this.isLoggedIn
   }
}
