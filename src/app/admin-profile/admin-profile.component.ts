import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LiteralArrayExpr } from '@angular/compiler';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent implements OnInit {
  adminForm:FormGroup;
  vibhagList:any = [];
  jillaList:any = [];
  talukaList:any = [];
  vastiList:any = [];
  shakhaList:any = []; 
  sevaVastiFlag:boolean = false;
  shakaListFlag:boolean = false; 
  addVastiFlag:boolean = false;
  addShakhaFlag:boolean = false;
  vibhagUrl:string = "api/getVibhag";
  jillaUrl:string = "api/getJilla";
  talukaUrl:string = "api/getTaluka";
  vastiUrl:string = "api/getSevaVasti";
  shakhaUrl:string = "api/getShakha";

 constructor(private ApiService:ApiService){
   this.adminForm = new FormGroup({
    vibhag: new FormControl(''),
    jilla: new FormControl(''),
    taluka: new FormControl(''),
    vasti: new FormControl(''),
    shakha: new FormControl(''),
    newVasti: new FormControl(''),
    newShakha: new FormControl('')
   })
 }


 ngOnInit(){
   this.ApiService.getData(this.vibhagUrl).subscribe({next:(res:any)=>{
    console.log(res);
    this.vibhagList = res;
   },error:()=>{}})
   
 }
 vibhagChange(e:any){
  console.log(e.target.value)
  this.jillaList=[];
  this.talukaList=[];
  this.vastiList=[];
  this.shakhaList = [];
  this.sevaVastiFlag = false;
  this.shakaListFlag = false;
  
this.ApiService.getData(`${this.jillaUrl}/${e.target.value}`).subscribe({next:(res:any)=>{
  this.jillaList = res;
 },error:()=>{}})

 }
 jillaChange(e:any){
  this.sevaVastiFlag = false;
  this.shakaListFlag = false;
  this.talukaList=[];
  this.vastiList=[];
  this.shakhaList = [];
  this.ApiService.getData(`${this.talukaUrl}/${e.target.value}`).subscribe({next:(res:any)=>{
    this.talukaList = res;
   },error:()=>{}})
   console.log(this.talukaList)
}
talukaChange(e:any){
  this.vastiList=[];
  this.shakhaList = [];
  this.ApiService.getData(`${this.vastiUrl}/${e.target.value}`).subscribe({next:(res:any)=>{
    this.vastiList = res;
    this.sevaVastiFlag = true;
   },error:()=>{}})
   console.log(this.vastiList)
}
vastiChange(e:any){
  this.shakaListFlag = true;
      if(e.target.value=='addVasti'){ 
        this.addVastiFlag = true;
        this.shakaListFlag = false;
    } 
    this.ApiService.getData(`${this.shakhaUrl}/${e.target.value}`).subscribe({next:(res:any)=>{
      this.shakhaList = res;
     },error:()=>{}})
     console.log(this.shakhaList)
  
}

addVasti(val:any){
  console.log(val)
  // api call pending to add vasti 
  const pushedVal:any = {
    sevaVastiName: this.adminForm.controls['newVasti'].value,
    talukaId:this.adminForm.controls['taluka'].value
  };
  this.ApiService.postData('api/sevaVasti/save',pushedVal).subscribe((res)=>{
     this.vastiList.push(res)
  })
  // this.vastiList.push(pushedVal);
  // this.adminForm.patchValue({
  //   vasti:pushedVal
  // })
  this.addVastiFlag = false;

}

addShakha(val:any){
  console.log(val)
  // api call pending to add vasti 
  const pushedShakha:any = {
    shakhaName: this.adminForm.controls['newShakha'].value,
    id: 1001
  };
  this.shakhaList.push(pushedShakha);
  this.addShakhaFlag = false;

  console.log(this.shakhaList)
}
shakhaChange(e:any){
  if(e.target.value=='addSakha'){
    this.addShakhaFlag = true;
     }
}
 onSubmit(formData:any){
  console.log(formData.value)
 }
}