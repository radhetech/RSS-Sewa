import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { SnackbarComponent } from 'src/app/theme/shared/components/notification/snackbar.component';

@Component({
  selector: 'app-temp-admin',
  standalone: true,
  imports: [SnackbarComponent, CommonModule,CardComponent,ReactiveFormsModule],
  templateUrl: './temp-admin.component.html',
  styleUrl: './temp-admin.component.scss'
})
export class TempAdminComponent implements OnInit{
  userForm: any;
  showSnackBar:boolean = false;
  msg:string = '';
  snackbarColour:string = '';
   constructor(private fb: FormBuilder,private apiService:ApiService){}
   ngOnInit(): void {
    this.userForm = this.fb.group({
      login: ['', Validators.required],  // Username is required
      password: ['', Validators.required],  // Password is required
    });
   }
  
   onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      const userData = this.apiService.getUserData();
      console.log(userData)
      formData.jilla = userData.jilla;
      formData.prant = userData.prant;
      formData.vibhag = userData.vibhag;
      formData.authorities = ["SDARSHAN"],
      this.apiService.postData('api/register',formData).subscribe((res)=>{
        console.log(res)
        this.showSnackBar = true;
        this.snackbarColour="success";
        this.msg="યુઝર સફળતાપૂર્વક રજીસ્ટર થઈ ગયું";
        this.snackTimeOut();
        this.userForm.reset();
      },(err)=>{
        this.showSnackBar = true;
        this.msg="ફરી પ્રયત્ન કરો અથવા એડમીન નો  સંપર્ક કરો ";
        this.snackbarColour="error";
        this.snackTimeOut();
        console.log(err)
      })    } else {
      console.log('Form is invalid');  // Handle invalid form
    }
  }
  snackTimeOut() {
    setTimeout(() => {
      this.showSnackBar = null;
      console.log(this.showSnackBar);
    }, 3000);
  }
}
