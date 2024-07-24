import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  vibhagOptions: string[] = ['વિભાગ1', 'વિભાગ2', 'વિભાગ3']; 
  jilloOptions: { [key: string]: string[] } = {
    'વિભાગ1': ['જિલ્લો1', 'જિલ્લો2'],
    'વિભાગ2': ['જિલ્લો3', 'જિલ્લો4'],
    'વિભાગ3': ['જિલ્લો5', 'જિલ્લો6']
  };
  talukoOptions: { [key: string]: string[] } = {
    'જિલ્લો1': ['તાલુકો1', 'તાલુકો2'],
    'જિલ્લો2': ['તાલુકો3'],
    'જિલ્લો3': ['તાલુકો4', 'તાલુકો5'],
    'જિલ્લો4': ['તાલુકો6'],
    'જિલ્લો5': ['તાલુકો7'],
    'જિલ્લો6': ['તાલુકો8', 'તાલુકો9']
  }; 
  sevaVstiOptions: { [key: string]: string[] } = {
    'તાલુકો1': ['સેવા વસતી1', 'સેવા વસતી2'],
    'તાલુકો2': ['સેવા વસતી3', 'સેવા વસતી4'],
    'તાલુકો3': ['સેવા વસતી5', 'સેવા વસતી6'],
  }; 
  shakhaOptions: { [key: string]: string[] } = {
    'સેવા વસતી1': ['શાખા1', 'શાખા2'],
    'સેવા વસતી2': ['શાખા3', 'શાખા4'],
    'સેવા વસતી3': ['શાખા5', 'શાખા6'],
  }; 

  filteredJilloOptions: string[] = [];
  filteredTalukoOptions: string[] = [];
  filteredSevaVstiOptions: string[] = [];
  filteredShakhaOptions: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullname: ['', Validators.required],
      vibhag: ['', Validators.required],
      jillo: ['', Validators.required],
      taluko: ['', Validators.required],
      sevaVsti: ['', Validators.required],
      shakha: ['', Validators.required]
    });

    this.onVibhagChange(); // Initialize filtered dropdowns
  }

  onVibhagChange(): void {
    const selectedVibhag = this.profileForm.get('vibhag')?.value;
    if (selectedVibhag) {
      this.filteredJilloOptions = this.jilloOptions[selectedVibhag];
      this.profileForm.get('jillo')?.setValue('');
      this.profileForm.get('taluko')?.setValue('');
      this.profileForm.get('sevaVsti')?.setValue('');
      this.profileForm.get('shakha')?.setValue('');
      this.filteredTalukoOptions = [];
      this.filteredSevaVstiOptions = [];
      this.filteredShakhaOptions = [];
    } else {
      this.filteredJilloOptions = [];
      this.filteredTalukoOptions = [];
      this.filteredSevaVstiOptions = [];
      this.filteredShakhaOptions = [];
    }
  }

  onJilloChange(): void {
    const selectedJillo = this.profileForm.get('jillo')?.value;
    if (selectedJillo) {
      this.filteredTalukoOptions = this.talukoOptions[selectedJillo];
      this.profileForm.get('taluko')?.setValue('');
      this.profileForm.get('sevaVsti')?.setValue('');
      this.profileForm.get('shakha')?.setValue('');
      this.filteredSevaVstiOptions = [];
      this.filteredShakhaOptions = [];
    } else {
      this.filteredTalukoOptions = [];
      this.filteredSevaVstiOptions = [];
      this.filteredShakhaOptions = [];
    }
  }

  onTalukoChange(): void {
    const selectedTaluko = this.profileForm.get('taluko')?.value;
    if (selectedTaluko) {
      this.filteredSevaVstiOptions = this.sevaVstiOptions[selectedTaluko];
      this.profileForm.get('sevaVsti')?.setValue('');
      this.profileForm.get('shakha')?.setValue('');
      this.filteredShakhaOptions = [];
    } else {
      this.filteredSevaVstiOptions = [];
      this.filteredShakhaOptions = [];
    }
  }

  onSevaVstiChange(): void {
    const selectedSevaVsti = this.profileForm.get('sevaVsti')?.value;
    if (selectedSevaVsti) {
      this.filteredShakhaOptions = this.shakhaOptions[selectedSevaVsti];
      this.profileForm.get('shakha')?.setValue('');
    } else {
      this.filteredShakhaOptions = [];
    }
  }
}
