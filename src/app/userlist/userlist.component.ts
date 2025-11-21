import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../theme/shared/components/card/card.component';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent implements OnInit{
  list:any = [];
  @Input() jilla:string |null= null;

  constructor(private apiService:ApiService){
  
  }
  
  ngOnInit(): void {
    this.apiService.getData(`api/getUserList?jillaId=${this.jilla}`).subscribe((res:any)=>{
      if(res.length){
        this.list = res.filter((res)=>{
           return res.authorities[0].name == "SDARSHAN";
        })
      }
   });
  }

}
