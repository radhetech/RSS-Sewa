import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
@Component({
  selector: 'app-vahivat',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,CardComponent],
  templateUrl: './vahivat.component.html',
  styleUrl: './vahivat.component.scss'
})
export class VahivatComponent implements OnInit{
 
    adminForm:FormGroup;
    talukaAdminForm:FormGroup;
    vibhagList:any = [];
    jillaList:any = [];
    talukaList:any = [];
    vastiList:any = [];
    shakhaList:any = []; 
    talukaUser:boolean=false;
    userData:any;
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
     this.talukaAdminForm = new FormGroup({
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
     this.userData = this.ApiService.getUserData();
     if(this.userData.authorities[0]=='taluka'){
          this.talukaUser = true;
          this.talukaChange2(this.userData.taluka.talukaId);
     }
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
    debugger;
    this.adminForm.get('vasti').reset();
    this.adminForm.get('newVasti').reset();
    this.vastiList=[];
    this.shakhaList = [];
    this.ApiService.getData(`${this.vastiUrl}/${e.target.value}`).subscribe({next:(res:any)=>{
      this.vastiList = res;
      this.sevaVastiFlag = true;
     },error:()=>{}})
     console.log(this.vastiList)
  }
  talukaChange2(e:any){
    debugger;
    this.talukaAdminForm.get('vasti').reset();
    this.talukaAdminForm.get('newVasti').reset();
    this.vastiList=[];
    this.shakhaList = [];
    this.ApiService.getData(`${this.vastiUrl}/${e}`).subscribe({next:(res:any)=>{
      this.vastiList = res;
      this.sevaVastiFlag = true;
     },error:()=>{}})
     console.log(this.vastiList)
  }
  vastiChange(e:any){
    this.adminForm.get('shakha').reset();
    this.adminForm.get('newShakha').reset();
    this.talukaAdminForm.get('shakha').reset();
    this.talukaAdminForm.get('newShakha').reset();
    this.addShakhaFlag=false;
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
    this.adminForm.get('vasti').reset();
    this.adminForm.get('newVasti').reset();
    // this.vastiList.push(pushedVal);
    // this.adminForm.patchValue({
    //   vasti:pushedVal
    // })
    this.addVastiFlag = false;
  
  }
  addVasti2(val:any){
    console.log(val)
    // api call pending to add vasti 
    const pushedVal:any = {
      sevaVastiName: this.talukaAdminForm.controls['newVasti'].value,
      talukaId:this.userData.taluka.talukaId
    };
    this.ApiService.postData('api/sevaVasti/save',pushedVal).subscribe((res)=>{
       this.vastiList.push(res)
    })
    this.talukaAdminForm.get('vasti').reset();
    this.talukaAdminForm.get('newVasti').reset();
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
      sevaVastiId:this.adminForm.controls['vasti'].value
    };
    // this.shakhaList.push(pushedShakha);
    this.addShakhaFlag = false;
    this.ApiService.postData('api/shakha/save',pushedShakha).subscribe((res)=>{
      console.log(res);
      this.ApiService.getData(`${this.shakhaUrl}/${this.adminForm.controls['vasti'].value}`).subscribe({next:(res:any)=>{
        this.shakhaList = res;
        this.adminForm.controls['shakha'].setValue('');
       }
      })
      this.shakhaList.push(res)
    })
    this.adminForm.controls['shakha'].setValue('');
    this.adminForm.controls['shakha'].reset();
    this.adminForm.controls['newShakha'].reset()
    console.log(this.shakhaList)
  }
  addShakha2(val:any){
    console.log(val)
    // api call pending to add vasti 
    const pushedShakha:any = {
      shakhaName: this.talukaAdminForm.controls['newShakha'].value,
      sevaVastiId:this.talukaAdminForm.controls['vasti'].value
    };
    // this.shakhaList.push(pushedShakha);
    this.addShakhaFlag = false;
    this.ApiService.postData('api/shakha/save',pushedShakha).subscribe((res)=>{
      console.log(res);
      this.ApiService.getData(`${this.shakhaUrl}/${this.adminForm.controls['vasti'].value}`).subscribe({next:(res:any)=>{
        this.shakhaList = res;
        

       }
      })
      this.shakhaList.push(res)
    })
  
    console.log(this.shakhaList)
    this.talukaAdminForm.controls['shakha'].setValue('');
    this.talukaAdminForm.controls['shakha'].reset();
    this.talukaAdminForm.controls['newShakha'].reset();
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
