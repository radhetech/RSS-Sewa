import { Component, OnInit } from '@angular/core';
import { valueSelect } from '../services/valueSelect.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  myList:any = {};
  selectedShakha:string = ''; 
  selectedVasti:string = '';
  constructor(public valueSel:valueSelect){
   
  }
 ngOnInit(){
  this.myList = JSON.parse(window.localStorage.getItem('loggedInUser')!)
    console.log(this.myList);
    this.valueSel.getCurrentShakha().subscribe((item)=>{
      this.selectedShakha = item;
    })
    this.valueSel.getCurrentVasti().subscribe((item)=>{
      this.selectedVasti = item;
    })
 }
 

}
