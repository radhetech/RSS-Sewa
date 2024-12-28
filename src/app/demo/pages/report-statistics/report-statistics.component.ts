import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  selectDepartment(e: any) {
    this.statisticsType = e.target.value;
    
    if (e.target.value === '') {
      this.isOptionSelected = false;
    } else {
      this.isOptionSelected = true;
    }
  }
}
