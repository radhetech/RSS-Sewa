import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { valueSelect } from 'src/app/services/valueSelect.service';
import { SnackbarComponent } from 'src/app/theme/shared/components/notification/snackbar.component';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, SnackbarComponent],
  providers: [ApiService,AuthenticationService],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export default class AuthSigninComponent implements OnInit {
  constructor( private apiService: ApiService,
    private valSel:valueSelect,
    private AuthenticationService: AuthenticationService,
    private _router: Router) { }
    isLoginMode: boolean = true;
    loginerr: string | null = null;
    snackbarColour: string | null = null;
    loginUrl: string = 'api/account';
    authenticateUrl:string = 'api/authenticate';
    tempObj:any = [];
    apiResponseForm!: FormGroup;
  
    ngOnInit() {
      localStorage.clear();
      this.valSel.manageBreadCrumb(false);
    }
  
  
    
    onFormSubmitted(res: NgForm) {
      console.log(res.value)
      
      
    
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
        this.loginerr = 'સેવા વિભાગમાં આપનું સ્વાગત છે';
        this.snackTimeOut();
        setTimeout(() => {
          this._router.navigate(['/home/dashboard']);
        }, 1000);
     
      },((err)=>{
        this.snackbarColour = 'error';
        this.loginerr = 'સાચો યુઝર આઇડી/પાસવર્ડ નાખો';
        this.snackTimeOut();
      })
      )
    }
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


