import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit{
  constructor(private apiService:ApiService ){
    this.getVibhag();
   
  }
  vibhagList:Array<any> = [];
  jillaList:Array<any> = [];
  isMahanagar:boolean = false;
  selectedVibhag:any;
   ngOnInit(): void {
     
   }
   getVibhag(){
    this.apiService.getData("http://localhost:4000/vibhagList").subscribe({next:(res:any)=>{
      console.log(res);
      this.vibhagList = res;
      this.jillaVastiList();
     },error:()=>{}})
    
   }
   jillaVastiList(){
     this.vibhagList.forEach((item)=>{
      item.vibhagSevaVasti = 0;
        item.jilla.forEach((jilla:any)=>{
          jilla.jillaSevaVasti=0;
            jilla.taluka.forEach((taluka:any)=>{
              jilla.jillaSevaVasti += taluka.sevaVasti.length;
              item.vibhagSevaVasti += taluka.sevaVasti.length;
            })
        })
     })
     console.log(this.vibhagList)
   }
   vibhagChange(e:any){
    this.jillaList=[];
    this.vibhagList.forEach((item:any)=>{
      if(item.name==e.target.value){
        if(item.type=='mahanagar'){
          this.isMahanagar = true;
       } else {
        this.isMahanagar = false;
       }
        this.jillaList = item.jilla;
       // this.vibhagSel = item.name;
      }
   })
   this.selectedVibhag = e.target;
   }
}
