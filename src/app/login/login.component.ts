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
  loginUrl:string='http://localhost:4000/users';

  ngOnInit() {
     if(localStorage.getItem('loggedInUser')){
      this.AuthenticationService.isUserLogin = true;
      this._router.navigate(['home']);
     }
  }
  onFormSubmitted(res: NgForm) {
    // temporary if api is not working
   /* console.log(res.value)
    this.AuthenticationService.isUserLogin = true;
    this.snackbarColour = 'success';
    this._router.navigate(['home']);
    this.loginerr = 'સેવા વિભાગમાં આપનું સ્વાગત છે';
    this.snackTimeOut();*/
  //  uncomment until here
    // start
    //this code is for api. uncomment once we have backend
    this.apiService.getData(this.loginUrl).subscribe({next:(res:any)=>{
      res = res[3];
      localStorage.setItem('loggedInUser',JSON.stringify(res));
      console.log('login--',res.name);
      this.AuthenticationService.isUserLogin = true;
      this.snackbarColour = 'success';
      this.AuthenticationService.isUserLoginSub.next(res)
      this._router.navigate(['home']);
      this.loginerr = 'સેવા વિભાગમાં આપનું સ્વાગત છે';
      this.snackTimeOut();
   
    },error:((err:any)=>{
      this.snackbarColour = 'error';
      this.loginerr = 'સાચો યુઝર આઇડી/પાસવર્ડ નાખો';
      this.snackTimeOut();
    }) })
  }
// end
  snackTimeOut() {
    setTimeout(() => {
      this.loginerr = null;
      console.log(this.loginerr);
    }, 4000);
  }
}