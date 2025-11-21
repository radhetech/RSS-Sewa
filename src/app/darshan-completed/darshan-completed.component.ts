import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../theme/shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-darshan-completed',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './darshan-completed.component.html',
  styleUrl: './darshan-completed.component.scss'
})
export class DarshanCompletedComponent implements OnInit{
list:any = [];
dateString = '';
userData:any;
cardTitle:any;
constructor(private apiService:ApiService){

}
ngOnInit(): void {
 this.userData = JSON.parse(localStorage.getItem('loggedInUser'));
 this.cardTitle = {
  title: `સેવા દર્શનની વિગતો -જિલ્લો ${this.userData.jilla.jillaName} `,
  description: '',
}
    this.apiService.getData(`api/getSevaDarshan/${this.userData?.vibhag.vibhagId}/2025`).subscribe((res:any)=>{
       if(res.length){
         this.list = res.filter((res)=>{
            return res.jillaId==this.userData.jilla.jillaId;
         })
       }
    });
    this.list = this.list.map((item)=>{
      const date = new Date(item.createdDate);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = date.getFullYear();
  
     item.createdDate = `${day}/${month}/${year}`; // dd/MM/yyyy
     // return item.createdDate = this.datePipe.transform(item.createdDate, 'dd/MM/yyyy') || '';
    })
}
}
