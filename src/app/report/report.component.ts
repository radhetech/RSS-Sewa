import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss',
})
export class ReportComponent implements OnInit {
  constructor(private apiService: ApiService) {
    this.getVibhag();
  }
  vibhagList: Array<any> = [];
  jillaList: Array<any> = [];
  reportType!: string;
  selectedVibhag: any;
  ngOnInit(): void {}
  getVibhag() {
    this.apiService.getData('http://localhost:4000/vibhagList').subscribe({
      next: (res: any) => {
        console.log(res);
        this.vibhagList = res;
        this.jillaVastiList();
      },
      error: () => {},
    });
  }
  jillaVastiList() {
    this.vibhagList.forEach((item) => {
      item.vibhagSevaVasti = 0;
      item.jilla.forEach((jilla: any) => {
        jilla.jillaSevaVasti = 0;
        jilla.taluka.forEach((taluka: any) => {
          jilla.jillaSevaVasti += taluka.sevaVasti.length;
          item.vibhagSevaVasti += taluka.sevaVasti.length;
        });
      });
    });
    console.log(this.vibhagList);
  }

  selectReportType(e: any) {
    this.reportType = e.target.value;
  }
}
