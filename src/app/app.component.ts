import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'rssApp';
  showBreadCrumb:boolean = false;
  constructor(private apiService:ApiService,private cdr:ChangeDetectorRef){}
  ngOnInit(): void {
     this.apiService.showBreadCrumb.subscribe((val)=>{
      this.showBreadCrumb = val;
      this.cdr.detectChanges();
     })
  }

}
