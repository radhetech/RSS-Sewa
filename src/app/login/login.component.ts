import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { credentials } from '../Model/credentials';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { switchMap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { valueSelect } from '../services/valueSelect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private AuthenticationService: AuthenticationService,
    private _router: Router,
    private valSel:valueSelect
  ) {}
  isLoginMode: boolean = true;
  loginerr: string | null = null;
  snackbarColour: string | null = null;
  loginUrl: string = 'api/account';
  authenticateUrl:string = 'api/authenticate';
  tempObj:any = [];

  ngOnInit() {
    localStorage.clear();
    this.apiService.manageBreadCrumb(false)
   
  }
  
  onFormSubmitted(res: NgForm) {
    console.log(res.value)
    
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
    
  
    this.apiService.postData(this.authenticateUrl, {
      "password": res.value.password,
      "username": res.value.username,
      "rememberMe": "false"
    }
    ).pipe(
      switchMap((res1:any)=>{
        localStorage.setItem('Token',res1.id_token)
        console.log(res1.id_token)
        const headers2 = new HttpHeaders({
          'Authorization': `Bearer ${res1.id_token}`
        });
        return this.apiService.getData(this.loginUrl,{headers:headers2})
          // return this.apiService.getData(`this.loginUrl/${res1.token}`)
      })
    ).subscribe((res:any)=>{
          // res = res[0]

      localStorage.setItem('loggedInUser',JSON.stringify(res));
      console.log('login--',res.name);
      this.AuthenticationService.isUserLogin = true;
      this.snackbarColour = 'success';
      this.AuthenticationService.isUserLoginSub.next(res)
      this._router.navigate(['home']);
      this.loginerr = 'સેવા વિભાગમાં આપનું સ્વાગત છે';
      this.snackTimeOut();
   
    },((err)=>{
      this.snackbarColour = 'error';
      this.loginerr = 'સાચો યુઝર આઇડી/પાસવર્ડ નાખો';
      this.snackTimeOut();
    })
    )
    // this.apiService.getData(this.loginUrl).subscribe({next:(res:any)=>{
    //   res = res[0];
    //   localStorage.setItem('loggedInUser',JSON.stringify(res));
    //   console.log('login--',res.name);
    //   this.AuthenticationService.isUserLogin = true;
    //   this.snackbarColour = 'success';
    //   this.AuthenticationService.isUserLoginSub.next(res)
    //   this._router.navigate(['home']);
    //   this.loginerr = 'સેવા વિભાગમાં આપનું સ્વાગત છે';
    //   this.snackTimeOut();
   
    // },error:((err:any)=>{
    //   this.snackbarColour = 'error';
    //   this.loginerr = 'સાચો યુઝર આઇડી/પાસવર્ડ નાખો';
    //   this.snackTimeOut();
    // }) })
  }
  // end
  snackTimeOut() {
    setTimeout(() => {
      this.loginerr = null;
      console.log(this.loginerr);
    }, 4000);
  }
  forgetPassword(){
    alert('મદદ માટે તમારા જીલા એડમિનનો સંપર્ક કરો')
  }
}
