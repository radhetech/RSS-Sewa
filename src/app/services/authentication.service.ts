import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isUserLogin: boolean = false;
  loggedInUserData:any;
  isUserLoginSub = new Subject<any>();
  constructor(private _router:Router) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.isUserLogin = true;
      this.loggedInUserData = JSON.parse(loggedInUser);
    }
  }

  userLogout() {
    localStorage.removeItem('loggedInUser');
    this.isUserLogin = false;
    this._router.navigate(['login']);
  }

  clearLoginData() {
    localStorage.removeItem('userData');
  }

}
