import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { credentials } from '../Model/credentials';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  isLoginMode: boolean = true;
  loginerr: string | null = null;
  snackbarColour: string | null = null;

  loginService = inject(LoginService);
  _router = inject(Router);
  activeRouter: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRouter.queryParamMap.subscribe((a) => {
      const b = Boolean(a.get('logout'));
      console.log(typeof b);
      if (b) {
        this.loginService.userLogout();
        this.snackbarColour = 'success';
        this.loginerr = 'લૉગ આઉટ થઈ ગયા છો!!';
        this.snackTimeOut();
      }
    });
  }
  onFormSubmitted(res: NgForm) {
    const emailid = res.value.email.toLowerCase();
    const passwords = res.value.password;
    const a = this.loginService.userLogin(emailid, passwords);
    if (a === undefined) {
      this.snackbarColour = 'error';
      this.loginerr = 'સાચો યુઝર આઇડી/પાસવર્ડ નાખો';
      this.snackTimeOut();
    } else {
      this.snackbarColour = 'success';
      this.loginerr = 'સેવા વિભાગમાં આપનું સ્વાગત છે';
      this.snackTimeOut();
      this._router.navigate(['home']);
    }
  }
  snackTimeOut() {
    setTimeout(() => {
      this.loginerr = null;
      console.log(this.loginerr);
    }, 4000);
  }
  // public userData = { username: '', name: '', isLoggedIn: false };

  // data: credentials[] = [
  //   {
  //     Name: 'Dainik',
  //     userid: 'dainik@gmail.com',
  //     password: '123'
  //   },
  //   {
  //     Name: 'Munesh',
  //     userid: 'munesh@gmail.com',
  //     password: 'Ram@111'
  //   }
  // ]

  // onFormSubmitted(res: NgForm) {
  //   const emailid = res.value.email.toLowerCase();
  //   const passwords = res.value.password;

  //   const userFound = this.data.find(item => item.userid === emailid && item.password === passwords)
  //   console.log(userFound);
  //   if (userFound) {
  //     this.userData.username = emailid;
  //     this.userData.isLoggedIn = true;
  //     this.loginService.isLoggedIns = this.userData.isLoggedIn;
  //     this.loginService.setLoginData(JSON.stringify(this.userData));
  //     this.loginService.setLoginStatus(true);
  //     this.snackbarColour = 'success';
  //     this.loginerr = 'Welcome to RSS - ' + userFound.Name;
  //     this.snackTimeOut();
  //     setTimeout(() => {
  //       this._router.navigate(['home']);
  //     }, 1500);
  //   }
  //   else {
  //     this.userData.username = '';
  //     this.userData.isLoggedIn = false;
  //     this.loginService.setLoginData(JSON.stringify(this.userData));
  //     this.loginService.setLoginStatus(false);
  //     this.loginerr = 'Wrong Userid or Password';
  //     this.snackbarColour = 'error'
  //     this.snackTimeOut();
  //   }

  // }
  // snackTimeOut() {
  //   console.log("Snack timeout function called");
  //   setTimeout(() => {
  //     this.loginerr = null;
  //     console.log(this.loginerr);
  //   }, 4000);
  // }
}

// let found = false;
// res.reset()
// this.data.forEach((res)=>{
// if(emailid===res.userid && passwords===res.password){
//   found = true;
//   this.snackbarColour = 'success'
//   this.loginerr = 'Welcome to RSS - ' + res.Name
//   this.snackTimeOut()
//   this._router.navigate(['home'])
//    return;
// }
// })
// if (!found) {
//   this.snackbarColour = 'error'
//   this.loginerr = 'Wrong userid or password'
//   this.snackTimeOut()
