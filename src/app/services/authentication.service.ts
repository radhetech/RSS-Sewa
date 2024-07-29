import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { credentials } from '../Model/credentials';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  data: credentials[] = [
    {
      Name: 'Dainik',
      userid: 'dainik@gmail.com',
      password: '123',
    },
    {
      Name: 'Munesh',
      userid: 'munesh@gmail.com',
      password: 'Ram@111',
    },{
      Name: 'yagni',
      userid: 'yagni@gmail.com',
      password: 'dm123',
    },
    {
      Name: 'Vishal',
      userid: 'vishal@gmail.com',
      password: '1234',
    },
  ];
  isUserLogin: boolean = false;
  loggedInUserData:any;
  _router = inject(Router);

  constructor() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.isUserLogin = true;
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
