import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  @Input() errorsmsg:string |null= null;
  @Input()  snackbarColour:string |null= null;
}
