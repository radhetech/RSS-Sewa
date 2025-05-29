import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-report-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-statistics.component.html',
  styleUrl: './report-statistics.component.scss'
})
export class ReportStatisticsComponent {
  isOptionSelected: boolean = false;
  statisticsType!: string;
  @Input() selectedMonth: string = '';
  @Input() selectedYear: string = '';
  vibhagId: string = '';
  sevaUpkramData: any[] = [];

  constructor(private apiService: ApiService) {
    this.vibhagId = JSON.parse(localStorage.getItem('loggedInUser')).vibhag.vibhagId;
  }

  ngOnChanges() {
    this.callApi();
  }

  callApi() {
    this.apiService.getData('api/getSevaUpkram/' + '676077046ea295c064d62925' + '/' + this.selectedMonth + '/' + this.selectedYear).subscribe((res: any) => {
      this.sevaUpkramData = res;
    });
  }

  selectDepartment(e: any) {
    this.statisticsType = e.target.value;
    
    if (e.target.value === '') {
      this.isOptionSelected = false;
    } else {
      this.isOptionSelected = true;
    }
  }

  getTotal(data: any[]) {
    let total = 0;

    for (const activity in data) {
        const { men = 0, women = 0, others = 0 } = data[activity];
        total += men + women + others;
    }

    return total;
}

}
