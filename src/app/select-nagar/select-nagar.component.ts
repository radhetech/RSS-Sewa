import { Component, inject, Input } from '@angular/core';
import { SelectNagarService } from '../services/selectNagar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-nagar',
  templateUrl: './select-nagar.component.html',
  styleUrl: './select-nagar.component.scss'
})
export class SelectNagarComponent {
  selectedNagar: string ='Nagar1';

  sharedService=inject(SelectNagarService)
  router=inject(Router)

  OnCloseForm() {
    this.router.navigate(['/SevaUpakrama'])
  }

  OnFormSubmitted(){
    if (this.selectedNagar) {
      this.sharedService.changeNagar(this.selectedNagar);
      console.log('Form submitted with nagar:', this.selectedNagar);
    }
    this.router.navigate(['/SevaUpakrama'])
  }
}
