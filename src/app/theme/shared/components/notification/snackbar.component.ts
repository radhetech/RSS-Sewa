import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
  standalone:true
})
export class SnackbarComponent {
  @Input() errorsmsg:string |null= null;
  @Input()  snackbarColour:string |null= null;
}
