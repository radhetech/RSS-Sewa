import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { credentials } from '../Model/credentials';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
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
    },
    {
      Name: 'Vishal',
      userid: 'vishal@gmail.com',
      password: '1234',
    },
  ];
  isUserLogin: boolean = false;
  _router = inject(Router);

  constructor() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.isUserLogin = true;
    }
  }

  userLogin(username: string, password: string) {
    const loginUser = this.data.find(
      (a) => a.userid == username && a.password == password
    );
    console.log(loginUser);
    if (loginUser === undefined) {
      this.isUserLogin = false;
    } else {
      localStorage.setItem('loggedInUser', JSON.stringify(loginUser));
      this.isUserLogin = true;
    }
    return loginUser;
  }
  userLogout() {
    localStorage.removeItem('loggedInUser');
    this.isUserLogin = false;
    this._router.navigate(['login']);
  }

  isuserLoginorNot() {
    return this.isUserLogin;
  }

  //   private loginObserveable = new BehaviorSubject(null);
  //   isLoggedIn = this.loginObserveable.asObservable();
  //   isLoggedIns:boolean=false;

  // setLoginData(data: any) {
  //   localStorage.setItem('userData', data);
  // }

  // getLoginData() {
  //   return JSON.parse(localStorage.getItem('userData') as any);
  // }

  clearLoginData() {
    localStorage.removeItem('userData');
  }

  // setLoginStatus(isLoggedIn: any) {
  //   this.loginObserveable.next(isLoggedIn)
  // }
}
