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
  constructor(private apiService:ApiService, private valueSel:valueSelect){
    
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('loggedInUser')!);
    this.getVastiList();
    // this.vastiList = [{name:'વસ્તી-1'},{name:'વસ્તી-2'}];
    this.shakhaList = [{name:'શાખા-1'},{name:'શાખા-2'}];
    this.valueSel.changeVasti('વસ્તી');
    this.valueSel.changeShakha('શાખા')
  }
  getVastiList(){
    console.log(this.userData.vibhag);
    this.apiService.getData('http://localhost:4000/vibhagList').subscribe((res:any)=>{
       console.log(res) // array of vibhag
       res.forEach((item:any)=>{
          if(item.name==this.userData.vibhag){
             item.jilla.forEach((jilla:any)=>{
                 if(jilla.name==this.userData.jilla){
                  jilla.taluka.forEach((taluka:any)=>{
                    if(taluka.name==this.userData.taluka){
                       this.vastiList = taluka.sevaVasti;
                       console.log('vastiList',this.vastiList)
                    }
                  })
                 }
             })
          }
       })
    })
  }
  getShakhaList(){}
  vastiChange(e:any){
    if(e.value!='વસ્તી'){
      this.vastiList.forEach((vasti:any)=>{
         if(vasti.name==e.value){
          this.shakhaList = vasti.shakha;
          console.log(this.shakhaList)
         }
      })
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
