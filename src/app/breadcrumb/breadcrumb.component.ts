import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { valueSelect } from '../services/valueSelect.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  myList:any = {};
  vastiList:any = [];
  shakhaList:any = []; 
  // selectedShakha:string = ''; 
  // selectedVasti:string = '';
  vastiUrl:string = "api/getSevaVasti";
  shakhaUrl:string = "api/getShakha";
  showBreadCrumb:boolean = false;
  shakhaVrutSelected!:boolean;
  constructor(private apiService:ApiService,private valueSel:valueSelect,private cdr:ChangeDetectorRef){
   
  }
 ngOnInit(){
  this.myList = JSON.parse(window.localStorage.getItem('loggedInUser')!)
  this.getVastiList();
  this.apiService.shakhaVrutSelected$.subscribe((res)=>{
    this.shakhaVrutSelected = res;
    this.cdr.detectChanges();
  })
}
getVastiList(){
  this.apiService.getData(`${this.vastiUrl}/${this.myList.taluka.talukaId}`).subscribe({next:(res:any)=>{
    this.vastiList = res;
   },error:()=>{}})
   console.log(this.vastiList)
}
 vastiChange(e:any){
  if(e.value!='વસ્તી' && this.shakhaVrutSelected ){
    this.apiService.getData(`${this.shakhaUrl}/67591d19f952504ab473eff9`).subscribe({next:(res:any)=>{
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
  if(e.value!='શાખા'){
    this.valueSel.changeShakha(e.value)
    console.log(e.value)
  }
}


}
