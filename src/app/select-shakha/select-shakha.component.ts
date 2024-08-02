import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-select-shakha',
  templateUrl: './select-shakha.component.html',
  styleUrl: './select-shakha.component.scss'
})
export class SelectShakhaComponent implements OnInit{
  shakhaForm!:FormGroup;
  vastiList:any = [];
  shakhaList:any = [];
  constructor(private apiService:ApiService){
    
  }
  ngOnInit(): void {
    this.shakhaForm = new FormGroup({
      vasti:new FormControl('', [Validators.required]),
      shakhaVal: new FormControl('')
    });
    this.vastiList = [{name:'vasti1'},{name:'vasti2'}];
    this.shakhaList = [{name:'shakha1'},{name:'shakha2'}];
  }
  vastiChange(e:any){
    console.log(e.target.value)
  }
  shakhaChange(e:any){
    console.log(e)
  }
}
