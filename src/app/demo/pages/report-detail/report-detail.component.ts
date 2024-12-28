import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-report-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-detail.component.html',
  styleUrl: './report-detail.component.scss'
})
export class ReportDetailComponent {
  isOptionSelected: boolean = false;
  isDetailedSummary: boolean = false;
  isMahanagar: boolean = false;
  isJilla: boolean = false;
  isNagar: boolean = false;

  vibhagChange(e: any) {
    if (e.target.value === '') {
      this.isOptionSelected = false;
      this.isDetailedSummary = false;
    } else {
      if (e.target.value === 'other') {
        this.isDetailedSummary = true;
        this.isOptionSelected = false;
      } else {
        this.isDetailedSummary = false;
        this.isOptionSelected = true;

        if (e.target.value == 'mahanagar') {
          this.isMahanagar = true;
          this.isJilla = false;
          this.isNagar = false;
        } else if (e.target.value == 'vibhag') {
          this.isMahanagar = false;
          this.isJilla = true;
          this.isNagar = false;
        } else if (e.target.value == 'nagar') {
          this.isMahanagar = false;
          this.isJilla = false;
          this.isNagar = true;
        }
      }
    }
  }
}

