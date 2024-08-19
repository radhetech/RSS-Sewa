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
  addVastiFlag:boolean = false;
  addShakhaFlag:boolean = false;


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
 getVibhagUrl:string = 'http://localhost:4000/vibhagList';

 ngOnInit(){
   this.ApiService.getData(this.getVibhagUrl).subscribe({next:(res:any)=>{
    console.log(res);
    this.vibhagList = res;
   },error:()=>{}})
  
   
 }
 vibhagChange(e:any){
  this.jillaList=[];
  this.talukaList=[];
  this.vastiList=[];
  this.shakhaList = [];
   this.vibhagList.forEach((item:any)=>{
   if(item.name==e.target.value){
     this.jillaList = item.jilla;
   }
})
 }
 jillaChange(e:any){
  this.talukaList=[];
  this.vastiList=[];
  this.shakhaList = [];
  this.jillaList.forEach((item:any)=>{
  if(item.name==e.target.value){
    this.talukaList = item.taluka;
  }
})
}
talukaChange(e:any){
  this.vastiList=[];
  this.shakhaList = [];
  this.talukaList.forEach((item:any)=>{
  if(item.name==e.target.value){
    this.vastiList = item.sevaVasti;
  }
})
}
vastiChange(e:any){
      if(e.target.value=='addVasti'){
        this.addVastiFlag = true;
        this.shakhaList = [];
         }
  
  console.log(this.vastiList)
  this.vastiList.forEach((item:any)=>{
  if(item.name==e.target.value){
    this.shakhaList = item.shakha;
    
  }
})
}

addVasti(val:any){
  console.log(val)
  // api call pending to add vasti 
  const pushedVal:any = {
    name: this.adminForm.controls['newVasti'].value,
    id: 1001,
    shakha:[]
  };
  this.vastiList.push(pushedVal);
  this.adminForm.patchValue({
    vasti:pushedVal
  })
  this.addVastiFlag = false;
  //this.adminForm.controls['newVasti'].value = 
  this.adminForm.patchValue({
    newVasti:''
  })
  console.log(this.adminForm.value)
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