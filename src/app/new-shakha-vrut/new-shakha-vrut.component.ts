import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { valueSelect } from '../services/valueSelect.service';

@Component({
  selector: 'app-new-shakha-vrut',
  templateUrl: './new-shakha-vrut.component.html',
  styleUrl: './new-shakha-vrut.component.scss'
})
export class NewShakhaVrutComponent implements OnInit {
  formGroup!:FormGroup;
  isShakhaSelected:boolean = false;
  isVastiSelected:boolean = false;
sanskar1List:any = [{name:'amrutvachan/subhashit'},{name:'seva git'},
  {name:'seva bodh katha'}
]
isSanskar1Open = false;
  isSanskar2Open = false;
constructor(private valueSel:valueSelect){
  this.formGroup= new FormGroup({
    selectedCategory: new FormControl('',Validators.required),
    weeklyForm: new FormGroup({
      sanskar:new FormControl(''),
      sanskar1Group:new FormGroup({
        sevaBodhKatha: new FormControl(''),
        sevaGit: new FormControl(''),
        amrutvachanSubhashit: new FormControl(''),
      }),
      sanskar2Group:new FormGroup({
        karyNondh: new FormControl(''),
        vishayLenar: new FormControl(''),
       sevaPrasang: new FormControl(''),
       karyAyojan: new FormControl('')
      }),
     

    }),
    monthlyForm: new FormGroup({
      sampark: new FormControl(''),
      swSankhya: new FormControl(''),
      visheshNondh: new FormControl(''),
    })
  })
}
  ngOnInit(): void {
    this.valueSel.getCurrentShakha().subscribe((res)=>{
      this.formGroup.reset();
      if(res!='શાખા'){
       this.isShakhaSelected = true;
      } else {
       this.isShakhaSelected = false;
      }
    })
    this.valueSel.getCurrentVasti().subscribe((res)=>{
      this.formGroup.reset();
     if(res!='વસ્તી'){
      this.isVastiSelected = true;
     } else {
       this.isVastiSelected = false;
     }
   })
}

get selectedCategory(){
  return this.formGroup.controls['selectedCategory'].value
}
get selectedSanskar(){
  return (this.formGroup.controls['weeklyForm'] as FormGroup).get('sanskar')!.value;
  //return temp.controls['sanskar'];
}
get samparkSelected(){
  return (this.formGroup.controls['monthlyForm'] as FormGroup).get('sampark')!.value;
}
selectedAccordion(val:string){
  this.formGroup.patchValue({
    selectedCategory:val
  })
  
}
submitForm(form:any){
  console.log(form.value)
  if(this.selectedCategory=='W'){
    form.value.monthlyForm = '';
    if(form.value.weeklyForm.sanskar=='sanskar1'){
      form.value.weeklyForm.sanskar2Group = '' ;
   } else {
    form.value.weeklyForm.sanskar1Group = '';
   }
  } else if(this.selectedCategory=='M'){
    form.value.weeklyForm = '';
    if(form.value.monthlyForm.sampark=='No'){
      form.value.monthlyForm.swSankhya = '';
      form.value.monthlyForm.visheshNondh = '' 
   } 
  } 
  this.formGroup.reset(); 
}
}
