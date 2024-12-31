import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-temp-admin',
  standalone: true,
  imports: [CommonModule,CardComponent,ReactiveFormsModule],
  templateUrl: './temp-admin.component.html',
  styleUrl: './temp-admin.component.scss'
})
export class TempAdminComponent implements OnInit{
  userForm: any;
   constructor(private fb: FormBuilder,private apiService:ApiService){}
   ngOnInit(): void {
    this.userForm = this.fb.group({
      login: ['', Validators.required],  // Username is required
      password: ['', Validators.required],  // Password is required
    });
   }
   /*
   {
    "login": "navrangpura",
    "password": "navrangpura$",
    "prant": "ગુજરાત ",
    "taluka": {
        "talukaName": "નવરંગપુરા",
        "talukaId": "67591d19f952504ab473eff9",
        "jillaId": "675913bef952504ab473eff2"
    },
    "jilla": {
        "jillaName": "પાલડી",
        "jillaId": "675913bef952504ab473eff2",
        "vibhagId": "675912b3f952504ab473efe2"
    },
    "vibhag": {
        "vibhagName": "કર્ણાવતી પશ્ચિમ",
        "vibhagId": "675912b3f952504ab473efe2"
    }
}
   */
   onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      const userData = this.apiService.getUserData();
      console.log(userData)
      formData.jilla = userData.jilla;
      formData.prant = userData.prant;
      formData.vibhag = userData.vibhag;
      formData.authorities = ["sdarshan"],
      this.apiService.postData('api/register',formData).subscribe((res)=>{
        console.log(res)
      })    } else {
      console.log('Form is invalid');  // Handle invalid form
    }
  }
}
