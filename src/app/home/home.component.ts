import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

constructor(private apiService:ApiService){}
ngOnInit() {
    this.apiService.manageBreadCrumb(false)
}
   
}
