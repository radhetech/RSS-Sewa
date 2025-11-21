import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-monthly-shakha-vrut',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report-monthly-shakha-vrut.component.html',
  styleUrl: './report-monthly-shakha-vrut.component.scss'
})
export class ReportMonthlyShakhaVrutComponent implements OnChanges {
  data: any[] = [];
  @Input() selectedMonth: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.warn('Check', this.selectedMonth);
    this.data = [{}];
  }
}
