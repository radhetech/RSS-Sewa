import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ReportDetailComponent } from '../report-detail/report-detail.component';
import { ReportStatisticsComponent } from '../report-statistics/report-statistics.component';
import { ReportSummaryComponent } from '../report-summary/report-summary.component';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { valueSelect } from 'src/app/services/valueSelect.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule,ReportDetailComponent,ReportStatisticsComponent,ReportSummaryComponent,CardComponent, FormsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  constructor(private apiService: ApiService,private valSel:valueSelect) {
    this.getVibhag();
  }
  vibhagList: Array<any> = [];
  jillaList: Array<any> = [];
  reportType!: string;
  selectedVibhag: any;
  selectedMonth: any = "";
  selectedYear: any = "";
  years: number[] = [];
  vibhagUrl:string = "api/getVibhag";
  jillaUrl:string = "api/getJilla";
  ngOnInit(): void {
    this.generateYearList();
  }
  getVibhag() {
    this.apiService.getData(this.vibhagUrl).subscribe({
      next: (res: any) => {
        console.log(res);
        this.vibhagList = res;
       
      },
      error: () => {},
    });
  }
  // jillaVastiList() {
  //   this.vibhagList.forEach((item) => {
  //     item.vibhagSevaVasti = 0;
  //     item.jilla.forEach((jilla: any) => {
  //       jilla.jillaSevaVasti = 0;
  //       jilla.taluka.forEach((taluka: any) => {
  //         jilla.jillaSevaVasti += taluka.sevaVasti.length;
  //         item.vibhagSevaVasti += taluka.sevaVasti.length;
  //       });
  //     });
  //   });
  //   console.log(this.vibhagList);
  // }

  selectReportType(e: any) {
    this.reportType = e.target.value;
    this.selectedYear = '';
    this.selectedMonth = '';
  }

  selectMonth(e: any) {
    this.selectedMonth = e.target.value;
  }

  selectYear(e: any) {
    this.selectedYear = e.target.value;
  }
  generateYearList() {
    const startYear = 2023;
    const endYear = new Date().getFullYear() + 2;

    this.years = Array.from(
      { length: endYear - startYear + 1 }, 
      (_, i) => startYear + i
    );
  }
}

