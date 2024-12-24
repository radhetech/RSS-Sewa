import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-utsav-vrut',
  templateUrl: './utsav-vrut.component.html',
  styleUrl: './utsav-vrut.component.scss'
})
export class UtsavVrutComponent implements OnInit{


  rakshabandhanForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService:ApiService) {
    this.rakshabandhanForm = this.fb.group({
      nagarName: [''],
      utsavCount: [''],
      totalSevaPopulation: [''],
      contactedSevaPopulation: [''],
      workersCount: [''],
      familyContacted: [''],
      rakshaOrMessageGiven: [''],
      additionalContacts: [''],
      newWorkers: [''],
      specialNotes: ['']
    });
  }
  ngOnInit(): void {
      this.apiService.manageBreadCrumb(true);
      this.apiService.manageShakhaVrutFlag(false);
  }

  onSubmit(e:any) {
    console.log(e.value);
    e.reset()
  }

}
