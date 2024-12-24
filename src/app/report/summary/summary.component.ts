import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-report-summary',
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  imports: [CommonModule],
})
export class SummaryReportComponent implements OnInit {
  isOptionSelected: boolean = false;
  isDetailedSummary: boolean = false;
  isMahanagar: boolean = false;
  isJilla: boolean = false;
  isNagar: boolean = false;
  selectedVibhag!: any;
  jillaUrl:string = "api/getJilla";
  vibhagUrl:string = "api/getVibhag";
 jillaList:any = [];
 vibhagList:any = [];
  // @Input() jillaList!: any[];
 constructor(private apiService:ApiService){}
ngOnInit() {

    this.apiService.getData(this.vibhagUrl).subscribe({
      next: (res: any) => {
        console.log(res);
        this.vibhagList = res;
       
      },
      error: () => {},
   
    })
}
  vibhagChange(e: any) {
    if (e.target.value === '') {
      this.isOptionSelected = false;
      this.isDetailedSummary = false;
    } else {
       const selectedVibhag = this.vibhagList.find((obj:any)=>{
         return obj.vibhagId = e.target.value;
       })
       if(selectedVibhag.isMahanagar=='true'){
         this.isMahanagar = true
       } else {
        this.isMahanagar = false
       }
        this.isDetailedSummary = false;
        this.isOptionSelected = true;
        this.apiService.getData(`${this.jillaUrl}/${e.target.value}`).subscribe((res)=>{
           this.jillaList = res;
        })
    }

    // this.jillaList = [];
    // this.vibhagList.forEach((item: any) => {
    //   if (item.name == e.target.value) {
    //     if (item.type == 'mahanagar') {
    //       this.isMahanagar = true;
    //       this.isJilla = false;
    //       this.isNagar = false;
    //     } else if (item.type == 'vibhag') {
    //       this.isMahanagar = false;
    //       this.isJilla = true;
    //       this.isNagar = false;
    //     } else if (item.type == 'nagar') {
    //       this.isMahanagar = false;
    //       this.isJilla = false;
    //       this.isNagar = true;
    //     }
    //     this.jillaList = item.jilla;
    //     console.warn(this.jillaList);
    //     // this.vibhagSel = item.name;
    //   }
    // });
    this.selectedVibhag = e.target;
  }
}