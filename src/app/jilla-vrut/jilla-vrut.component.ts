import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-jilla-vrut',
  templateUrl: './jilla-vrut.component.html',
  styleUrl: './jilla-vrut.component.scss',
})
export class JillaVrutComponent implements OnInit{
  aayamList: any = ['samajik', 'shiksha', 'swasthya', 'swavalamban'];
  ayamChange(e: any) {
    // this.jillaForm.get('selAyam').value = e.value;
    console.log(e);
  }
  jillaForm: FormGroup;
  isSubmit!: boolean;
  constructor(private _apiService:ApiService) {
    this.jillaForm = new FormGroup({
      selAyam: new FormControl('', [Validators.required]),
      jBethak: new FormControl('', [Validators.required]),
      shakhaPravasNum: new FormControl('', [Validators.required]),
      sevaVastiPravasNum: new FormControl('', [Validators.required]),
      sevaKaryaPravasNum: new FormControl('', [Validators.required]),
      newSevaKaryaNum: new FormControl('', [Validators.required]),
      ayamSahNum: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this._apiService.manageBreadCrumb(false)
  }
  submitJilla(form: FormGroup) {
    this.isSubmit = true;
    this.jillaForm.markAllAsTouched();
    if (form.valid) {
      console.log('Form Submit :',form);
    } else {
      console.error('Invalid Form :', form);
    }
  }
}
