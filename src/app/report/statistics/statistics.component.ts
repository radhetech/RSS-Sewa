import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-report-statistics',
  standalone: true,
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
  imports: [CommonModule],
})
export class StatisticsReportComponent {
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
