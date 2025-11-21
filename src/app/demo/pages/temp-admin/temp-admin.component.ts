import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DarshanCompletedComponent } from 'src/app/darshan-completed/darshan-completed.component';
import { ApiService } from 'src/app/services/api.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { SnackbarComponent } from 'src/app/theme/shared/components/notification/snackbar.component';
import { UserlistComponent } from 'src/app/userlist/userlist.component';

@Component({
  selector: 'app-temp-admin',
  standalone: true,
  imports: [SnackbarComponent,DarshanCompletedComponent,UserlistComponent, CommonModule,CardComponent,ReactiveFormsModule],
  templateUrl: './temp-admin.component.html',
  styleUrl: './temp-admin.component.scss'
})
export class TempAdminComponent implements OnInit{
  userForm: any;
  showSnackBar:boolean = false;
  msg:string = '';
  snackbarColour:string = '';
  userData: any;
   constructor(private fb: FormBuilder,private apiService:ApiService){}
   ngOnInit(): void {
    this.userData = this.apiService.getUserData();
    this.userForm = this.fb.group({
      login: ['', Validators.required],  // Username is required
      password: ['', Validators.required],  // Password is required
    });
   }
  
   onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log(this.userData)
      formData.jilla = this.userData.jilla;
      formData.prant = this.userData.prant;
      formData.vibhag = this.userData.vibhag;
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
