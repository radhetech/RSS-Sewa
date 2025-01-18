import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from 'src/app/theme/shared/components/notification/snackbar.component';
import { ThisReceiver, TmplAstSwitchBlockCase } from '@angular/compiler';
@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [ReactiveFormsModule,CardComponent,CommonModule,SnackbarComponent],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.scss'
})
export class ManageUserComponent implements OnInit, OnDestroy{
  userForm:FormGroup;
  destroy$ = new Subject<void>(); 
  vibhagList:any=[];
  talukaList:any=[];;
  jillaList:any=[];
  selectedTaluka:any;
  showUserName:boolean=false;
  selectedJilla:any;
  selectedVibhag:any;
  snackbarColour:string='';
  showSnackBar:boolean=false;
  msg:any='';

  vibhagUrl: string = "api/getVibhag";
  jillaUrl: string = "api/getJilla";
  talukaUrl: string = "api/getTaluka";
  constructor(private ApiService:ApiService){
    this.userForm = new FormGroup({
      vibhag: new FormControl(''),
      jilla: new FormControl(''),
      taluka: new FormControl(''),
      login:new FormControl(''),
      password:new FormControl(''),

    });
  }
  ngOnInit(): void {
    this.ApiService.getData(this.vibhagUrl)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.vibhagList = res;
        },
        error: () => { }
      });

  
    
  }
  vibhagChange(e:any){
    console.log(e.target.value);
   this.selectedVibhag = this.vibhagList.find((vibhag: any) => vibhag.vibhagId === e.target.value);
    this.jillaList = [];
    this.talukaList = [];

    this.ApiService.getData(`${this.jillaUrl}/${e.target.value}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.jillaList = res;
        },
        error: () => { }
      });
  }
  jillaChange(e:any){
    this.selectedJilla = this.jillaList.find((jilla: any) => jilla.jillaId === e.target.value);
    this.talukaList = [];
    this.ApiService.getData(`${this.talukaUrl}/${e.target.value}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.talukaList = res;
        },
        error: () => { }
      });
    console.log(this.talukaList);
  }
  talukaChange(e:any){
    if(e.target.value){
      this.showUserName=true;
    this.selectedTaluka = this.talukaList.find((taluka: any) => taluka.talukaId === e.target.value);
    }else{
      this.showUserName=false;
    }
  }
  onSubmit(userForm){
    let data = {
      "login": userForm.value.login,
      "password": userForm.value.password,
      "prant": "ગુજરાત",
      "taluka": {
          "jillaId": userForm.value.jilla,
          "talukaId":userForm.value.taluka,
          "talukaName": this.selectedTaluka.talukaName
      },
      "jilla": {
          "jillaName": this.selectedJilla.jillaName,
          "jillaId":userForm.value.jilla,
          "vibhagId": userForm.value.vibhag
      },
      "vibhag": {
         "vibhagName": this.selectedVibhag.name,
          "vibhagId": userForm.value.vibhag
      },
      "authorities":["TALUKA"]
  
  }
    this.ApiService.postData('api/register',data)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.showSnackBar = true;
        this.snackbarColour = 'success';
        this.msg = "નવો યુઝર બની ગયેલ છે ";
        this.userForm.reset();
        this.userForm.controls['vibhag'].setValue('');
      }, (err) => {
        this.showSnackBar = true;
        this.snackbarColour = 'error';
        this.msg = 'ફરી  પ્રયત્ન કરો અથવા એડમીન ને સંપર્ક કરો.';
      });
     this.snackTimeOut();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  snackTimeOut() {
    setTimeout(() => {
      this.showSnackBar = null;
    }, 3000);
  }

}
