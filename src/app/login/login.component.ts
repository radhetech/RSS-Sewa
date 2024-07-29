import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { credentials } from '../Model/credentials';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private apiService:ApiService,private AuthenticationService:AuthenticationService,private _router:Router,private activeRouter:ActivatedRoute ){}
  isLoginMode: boolean = true;
  loginerr: string | null = null;
  snackbarColour: string | null = null;
  loginUrl:string='http://localhost:3000/users';

  ngOnInit() {
    this.activeRouter.queryParamMap.subscribe((a) => {
      const b = Boolean(a.get('logout'));
      console.log(typeof b);
      if (b) {
        this.AuthenticationService.userLogout();
        this.snackbarColour = 'success';
        this.loginerr = 'લૉગ આઉટ થઈ ગયા છો!!';
        this.snackTimeOut();
      }
    });
  }
  onFormSubmitted(res: NgForm) {
    console.log(res.value)
    this.AuthenticationService.isUserLogin = true;
    this.snackbarColour = 'success';
    this._router.navigate(['home']);
    this.loginerr = 'સેવા વિભાગમાં આપનું સ્વાગત છે';
    this.snackTimeOut();
   
    // this code is for api. uncomment once we have backend
    // this.apiService.postData(this.loginUrl,res.value).subscribe({next:(res)=>{
    //   this.snackbarColour = 'success';
    //   this._router.navigate(['home']);
    //   this.loginerr = 'સેવા વિભાગમાં આપનું સ્વાગત છે';
    //   this.snackTimeOut();
    //   sessionStorage.setItem('loggedInUser',res)
    // },error:((err:any)=>{
    //   this.snackbarColour = 'error';
    //   this.loginerr = 'સાચો યુઝર આઇડી/પાસવર્ડ નાખો';
    //   this.snackTimeOut();
    // }) })
  }
  snackTimeOut() {
    setTimeout(() => {
      this.loginerr = null;
      console.log(this.loginerr);
    }, 4000);
  }
}