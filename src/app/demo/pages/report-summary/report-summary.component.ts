import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-summary.component.html',
  styleUrl: './report-summary.component.scss'
})
export class ReportSummaryComponent implements OnInit, OnDestroy {
  isOptionSelected: boolean = false;
  isDetailedSummary: boolean = false;
  isMahanagar: boolean = false;
  isOther: boolean = false;
  selectedVibhag!: any;
  jillaUrl: string = 'api/getJilla';
  vibhagUrl: string = 'api/getVibhag';
  jillaList: any = [];
  vibhagList: any = [];
  summaryData: any = [];
  constructor(private apiService: ApiService) {}
  private subscriptions: Subscription = new Subscription();

  ngOnInit() {
    this.subscriptions.add(
      this.apiService.getData(this.vibhagUrl).subscribe({
        next: (res: any) => {
          console.log(res);
          this.vibhagList = res;
        },
        error: () => {}
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  vibhagChange(e: any) {
    if (e.target.value === '') {
      this.isOptionSelected = false;
      this.isDetailedSummary = false;
    } else if(e.target.value === 'other') {
      this.isOther = true;
      this.isMahanagar = false;
    } else {
      const selectedVibhag = this.vibhagList.find((obj: any) => {
        return obj.vibhagId === e.target.value;
      });
      this.selectedVibhag = selectedVibhag;
      if (selectedVibhag.isMahanagar === true) {
        this.isMahanagar = true;
      } else {
        this.isMahanagar = false;
      }
      this.isDetailedSummary = false;
      this.isOptionSelected = true;
      this.isOther = false;
      this.apiService.getData(`${this.jillaUrl}/${e.target.value}`).subscribe((res) => {
        this.jillaList = res;
      });
      this.apiService.getData('api/getSummaryReportbyVibhag/' + this.selectedVibhag.vibhagId).subscribe((res: any) => {
        this.summaryData = res;
      });
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
  }

  getTotal(arr: any[], key: string) {
    return arr.reduce((acc, obj) => acc + obj[key], 0);
  }
}
