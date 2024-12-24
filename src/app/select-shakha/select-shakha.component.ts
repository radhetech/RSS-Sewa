import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { valueSelect } from '../services/valueSelect.service';

@Component({
  selector: 'app-select-shakha',
  templateUrl: './select-shakha.component.html',
  styleUrl: './select-shakha.component.scss'
})
export class SelectShakhaComponent implements OnInit{
  shakhaForm!:FormGroup;
  vastiList:any = [];
  shakhaList:any = []; 
  userData:any = {};
  vastiUrl:string = "api/getSevaVasti";
  shakhaUrl:string = "api/getShakha";
  constructor(private apiService:ApiService, private valueSel:valueSelect){
    
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('loggedInUser')!);
    this.getVastiList();
    this.valueSel.changeVasti('વસ્તી');
    this.valueSel.changeShakha('શાખા')
  }
  getVastiList(){
    this.apiService.getData(`${this.vastiUrl}/${this.userData.taluka.talukaId}`).subscribe({next:(res:any)=>{
      this.vastiList = res;
     },error:()=>{}})
     console.log(this.vastiList)
  }
  getShakhaList(){}
  vastiChange(e:any){
    if(e.value!='વસ્તી'){
      this.apiService.getData(`${this.shakhaUrl}/${e.value}`).subscribe({next:(res:any)=>{
        this.shakhaList = res;
       },error:()=>{}})
       console.log(this.shakhaList)
    } else {
      this.shakhaList =[];
    }
   this.valueSel.changeVasti(e.value);
    console.log(e.value)
  }
  shakhaChange(e:any){
   this.valueSel.changeShakha(e.value)
    console.log(e.value)
  }
 
}
