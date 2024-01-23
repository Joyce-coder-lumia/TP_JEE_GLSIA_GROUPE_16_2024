import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private signingUp = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();
  isSigningUp$ = this.signingUp.asObservable();

  constructor() { }

  login() {
    // Logique de connexion
    this.loggedIn.next(true);
  }

  logout() {
    // Logique de déconnexion
    this.loggedIn.next(false);
  }

  signUp() {
    // Commencer le processus d'inscription
    this.signingUp.next(true);
  }

  completeSignUp() {
    // Terminer le processus d'inscription
    this.signingUp.next(false);
    this.loggedIn.next(true);
  }
}
