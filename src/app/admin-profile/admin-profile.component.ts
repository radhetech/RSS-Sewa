import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

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

 constructor(private ApiService:ApiService){
   this.adminForm = new FormGroup({
    vibhag: new FormControl(''),
    jilla: new FormControl(''),
    taluka: new FormControl(''),
    vasti: new FormControl(''),
    shakha: new FormControl(''),
   })
 }
 getVibhagUrl:string = 'http://localhost:4000/vibhagList';

 ngOnInit(){
   this.ApiService.getData(this.getVibhagUrl).subscribe({next:(res:any)=>{
    console.log(res);
    this.vibhagList = res["vibhag"]
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
  this.shakhaList = [];
  this.vastiList.forEach((item:any)=>{
  if(item.name==e.target.value){
    this.shakhaList = item.shakha;
  }
})
}
 onSubmit(formData:any){
  console.log(formData.value)
 }
}
