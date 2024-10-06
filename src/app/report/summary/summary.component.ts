import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-report-summary',
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  imports: [CommonModule],
})
export class SummaryReportComponent {
  isOptionSelected: boolean = false;
  isDetailedSummary: boolean = false;
  isMahanagar: boolean = false;
  isJilla: boolean = false;
  isNagar: boolean = false;
  selectedVibhag!: any;

  @Input() jillaList!: any[];
  @Input() vibhagList!: any[];

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
      }
    }
    this.jillaList = [];
    this.vibhagList.forEach((item: any) => {
      if (item.name == e.target.value) {
        if (item.type == 'mahanagar') {
          this.isMahanagar = true;
          this.isJilla = false;
          this.isNagar = false;
        } else if (item.type == 'vibhag') {
          this.isMahanagar = false;
          this.isJilla = true;
          this.isNagar = false;
        } else if (item.type == 'nagar') {
          this.isMahanagar = false;
          this.isJilla = false;
          this.isNagar = true;
        }
        this.jillaList = item.jilla;
        console.warn(this.jillaList);
        // this.vibhagSel = item.name;
      }
    });
    this.selectedVibhag = e.target;
  }
}
