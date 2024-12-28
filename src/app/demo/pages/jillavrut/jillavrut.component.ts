import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { valueSelect } from 'src/app/services/valueSelect.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-jillavrut',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CardComponent,CommonModule],
  templateUrl: './jillavrut.component.html',
  styleUrl: './jillavrut.component.scss'
})
export class JillavrutComponent {
  // aayamList: any = ['samajik', 'shiksha', 'aayogya', 'swavalamban'];
  jillaForm: FormGroup;
  isSubmit!: boolean;
  userData:any;
  selectedMonth:any;
  selectedYr:any
  maxDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  selectedDate: Date | null = null;
  constructor(private _apiService:ApiService,private valSel:valueSelect) {
    this.jillaForm = new FormGroup({
      jBethak: new FormControl('', [Validators.required]),
      shakhaPravasNum: new FormControl('', [Validators.required]),
      sevaVastiPravasNum: new FormControl('', [Validators.required]),
      sevaKaryaPravasNum: new FormControl('', [Validators.required]),
      newSevaKaryaNum: new FormControl('', [Validators.required]),
      shiksha:new FormControl('', [Validators.required]),
      aayogya:new FormControl('', [Validators.required]),
     swavalamban:new FormControl('', [Validators.required]),
     samajik:new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.valSel.manageBreadCrumb(false);
    this.userData = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  }
  manageBethak(e:any){
    return this.jillaForm.patchValue({jBethak:e.target.value});
  }
  submitJilla(form: FormGroup) {
    this.isSubmit = true;
    this.jillaForm.markAllAsTouched();
    if (form.valid) {
      form.value.jillaId = this.userData.jilla.jillaId;
      form.value.vibhagId = this.userData.vibhag.vibhagId;
      form.value.prant = this.userData.prant;
      form.value.month = this.selectedMonth;
      form.value.year = 2023;
     // form.value.year = this.selectedDate?.getFullYear();
      // form.value.ayamList=[];
      // this.aayamList.forEach((element:any) => {
      //   form.value.ayamList.push({aayam:element, count:form.value[element]});
      // });

      this._apiService.postData("api/jillaVrut", form.value).subscribe((res) => {
        console.log(res);
        this.jillaForm.reset();
        // this.selectedDate = null;
        this.isSubmit = false;
        this.selectedMonth="";
        this.selectedYr="";
      });
    } else {
      console.error('Invalid Form :', form);
    }
    this.jillaForm.reset();
        this.selectedDate = null;
        this.isSubmit = false;
  }

  // When the user selects a month
  onMonthSelected(month: any) {
    const year = this.selectedDate?.getFullYear();
    this.selectedDate = new Date(year!, month, 1); // Set the selected year and month
    this._apiService.getData(`api/jillaVrut/${this.userData.jilla.jillaId}/${this.selectedMonth}/2023`).subscribe((res) => {
      console.log(res);
      // Handle the response data as needed
    });
    
  }

  // When the user selects a year
  onYearSelected(year: any) {
    const month = this.selectedDate?.getMonth();
    this.selectedDate = new Date(year, month!, 1); // Set the selected month and year
  }
  monthChange(e:any){
    this.selectedMonth = e.target.value;
    this._apiService.getData(`api/getJillaVrut/${this.userData.jilla.jillaId}/${this.selectedMonth}`).subscribe((res:any) => {
      console.log(res);
      this.jillaForm.patchValue(res[0]);
      // Handle the response data as needed
    });
  }
  yearChange(e:any){
   this.selectedYr = e.target.value;
  }
}
