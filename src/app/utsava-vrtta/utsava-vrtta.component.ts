import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-utsava-vrtta',
  templateUrl: './utsava-vrtta.component.html',
  styleUrl: './utsava-vrtta.component.scss'
})
export class UtsavaVrttaComponent {


  rakshabandhanForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

  onSubmit(e:any) {
    console.log(e.value);
    e.reset()
  }

}
