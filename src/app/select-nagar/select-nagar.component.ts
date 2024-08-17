import { Component, inject, Input } from '@angular/core';
// import { SelectNagarService } from '../services/valueSelect.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-nagar',
  templateUrl: './select-nagar.component.html',
  styleUrl: './select-nagar.component.scss',
})
export class SelectNagarComponent {
  adminForm: FormGroup;
  vibhagList: any = [];
  jillaList: any = [];
  talukaList: any = [];
  vastiList: any = [];
  shakhaList: any = [];
  selectedNagar: any = [];

  // sharedService=inject()
  router = inject(Router);
  getVibhagUrl: string = 'http://localhost:4000/vibhagList';

  constructor(private ApiService: ApiService) {
    this.adminForm = new FormGroup({
      vibhag: new FormControl(''),
      jilla: new FormControl(''),
      taluka: new FormControl(''),
      vasti: new FormControl(''),
      shakha: new FormControl(''),
    });
  }

  ngOnInit() {
    this.ApiService.getData(this.getVibhagUrl).subscribe({
      next: (res: any) => {
        console.log(res);
        this.vibhagList = res['vibhag'];
      },
      error: () => {},
    });
  }
  vibhagChange(e: any) {
    this.jillaList = [];
    this.talukaList = [];
    this.vastiList = [];
    this.shakhaList = [];
    const selectedVibhag = e.target.value;
    this.vibhagList.forEach((item: any) => {
      if (item.name == e.target.value) {
        this.jillaList = item.jilla;
      }
      this.selectedNagar.vibhag = selectedVibhag;
    });
  }
  jillaChange(e: any) {
    this.talukaList = [];
    this.vastiList = [];
    this.shakhaList = [];
    const selectedJilla = e.target.value;
    this.jillaList.forEach((item: any) => {
      if (item.name == e.target.value) {
        this.talukaList = item.taluka;
      }
    });
    this.selectedNagar.jilla = selectedJilla;
  }
  talukaChange(e: any) {
    this.vastiList = [];
    this.shakhaList = [];
    const selectedTaluka = e.target.value;
    this.talukaList.forEach((item: any) => {
      if (item.name == e.target.value) {
        this.vastiList = item.sevaVasti;
      }
    });
    this.selectedNagar.taluka = selectedTaluka;
  }
  vastiChange(e: any) {
    this.shakhaList = [];
    const selectedVasti = e.target.value;
    this.vastiList.forEach((item: any) => {
      if (item.name == e.target.value) {
        this.shakhaList = item.shakha;
      }
    });
    this.selectedNagar.vasti = selectedVasti;
  }
  shakhaChange(e: any) {
    this.selectedNagar.shakha = e.target.value;
  }

  OnCloseForm() {
    // this.router.navigate(['/SevaUpakrama'])
  }

  OnFormSubmitted() {
    // if (this.selectedNagar) {
    //   this.sharedService.changeNagar(this.selectedNagar);
    //   console.log('Form submitted with nagar:', this.selectedNagar);
    // }
    this.router.navigate(['/SevaUpakrama']);
  }
}
