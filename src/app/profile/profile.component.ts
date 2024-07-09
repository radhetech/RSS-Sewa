import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      emailid: ['', Validators.required],
      mobileno: ['', Validators.required],
      district: ['', Validators.required],
      taluk: [{ value: '', disabled: true }, Validators.required],
      population: [{ value: '', disabled: true }, Validators.required],
      branch: [{ value: '', disabled: true }, Validators.required]
    });

    this.profileForm.get('district')?.valueChanges.subscribe(value => {
      if (value) {
        this.profileForm.get('taluk')?.enable();
      } else {
        this.profileForm.get('taluk')?.disable();
        this.profileForm.get('population')?.disable();
        this.profileForm.get('branch')?.disable();
      }
    });

    this.profileForm.get('taluk')?.valueChanges.subscribe(value => {
      if (value) {
        this.profileForm.get('population')?.enable();
      } else {
        this.profileForm.get('population')?.disable();
        this.profileForm.get('branch')?.disable();
      }
    });

    this.profileForm.get('population')?.valueChanges.subscribe(value => {
      if (value) {
        this.profileForm.get('branch')?.enable();
      } else {
        this.profileForm.get('branch')?.disable();
      }
    });
  }
}
