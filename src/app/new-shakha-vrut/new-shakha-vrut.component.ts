import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { valueSelect } from '../services/valueSelect.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-shakha-vrut',
  templateUrl: './new-shakha-vrut.component.html',
  styleUrl: './new-shakha-vrut.component.scss',
})
export class NewShakhaVrutComponent implements OnInit {
  formGroup!: FormGroup;
  dateForm!:FormGroup;
  // snackbarColour:string = 'green'
  // snackMessage:any= 'સફળતાપૂર્વક સબમિટ કર્યું';
  // showSnackBar:boolean = false;
  lastFiveThursdays: Date[] = [];
  isShakhaSelected: boolean = false;
  isVastiSelected: boolean = false;
  dateHeading: any = '4/4/66464';
  dateSelected:boolean = false;
  userData: any;
  vrutVasti: string = '';
  vrutShakha: string = '';
  selectedDate: any;
  formId: string = '';
  formType: string = 'સબમિટ';
  isTalukaAdmin:boolean = false;

  sanskar1List: any = [
    { name: 'amrutvachan/subhashit' },
    { name: 'seva git' },
    { name: 'seva bodh katha' },
  ];
  isSanskar1Open = false;
  isSanskar2Open = false;
  constructor(private valueSel: valueSelect, private _apiService: ApiService) {
    this.getLastFiveThursdays();
    this.dateForm = new FormGroup({
      selectedDate: new FormControl('')
    })
    this.userData = this.valueSel.getUserData()!;
    this.formGroup = new FormGroup({
      // selectedDate: new FormControl(this.dateHeading,Validators.required),
      selectedCategory: new FormControl('', Validators.required),
      weeklyForm: new FormGroup({
        sanskar: new FormControl(''),
        sanskar1Group: new FormGroup({
          sevaBodhKatha: new FormControl(''),
          sevaGit: new FormControl(''),
          amrutvachanSubhashit: new FormControl(''),
        }),
        sanskar2Group: new FormGroup({
          karyNondh: new FormControl(''),
          vishayLenar: new FormControl(''),
          sevaPrasang: new FormControl(''),
          karyAyojan: new FormControl(''),
        }),
      }),
      monthlyForm: new FormGroup({
        sampark: new FormControl(''),
        swSankhya: new FormControl(''),
        visheshNondh: new FormControl(''),
      }),
    });
  }
  ngOnInit(): void {
    this.valueSel.getCurrentShakha().subscribe((res) => {
      this.formGroup.reset();
      if (res != 'શાખા') {
        this.vrutShakha = res;
        this.isShakhaSelected = true;
      } else {
        this.isShakhaSelected = false;
      }
    });
    this.valueSel.getCurrentVasti().subscribe((res) => {
      this.formGroup.reset();
      if (res != 'વસ્તી') {
        this.vrutVasti = res;
        this.isVastiSelected = true;
      } else {
        this.isVastiSelected = false;
      }
    });
    if(this.userData.role =='taluka-admin'){
      this.isTalukaAdmin = true;
    }
  }
  dateSelChange(e:any) {
   let selDate = this.dateForm.controls['selectedDate'].value;
    if(selDate){
      this.dateSelected = true;
    this._apiService
      .getData('http://localhost:4000/shakhaVrut')
      .subscribe((res: any) => {
        res = res[1];
        this.formId = res?.id;
        if (res != undefined || !res.selectedCategory) {
          this.formType = 'અપડેટ';
          this.formGroup.patchValue({
            selectedCategory: res?.selectedCategory,
            weeklyForm: {
              sanskar: res?.weeklyForm?.sanskar,
              sanskar1Group: {
                sevaBodhKatha: res?.weeklyForm?.sanskar1Group?.sevaBodhKatha,
                sevaGit: res?.weeklyForm?.sanskar1Group?.sevaGit,
                amrutvachanSubhashit:
                  res?.weeklyForm?.sanskar1Group?.amrutvachanSubhashit,
              },
              sanskar2Group: {
                karyNondh: res?.weeklyForm?.sanskar2Group?.karyNondh,
                vishayLenar: res?.weeklyForm?.sanskar2Group?.vishayLenar,
                sevaPrasang: res?.weeklyForm?.sanskar2Group?.sevaPrasang,
                karyAyojan: res?.weeklyForm?.sanskar2Group?.karyAyojan,
              },
              sheshNondh: res?.monthlyForm?.visheshNondh,
            },
            monthlyForm: {
              sanskar: res?.monthlyForm?.sanskar,
              sampark: res?.monthlyForm?.sampark,
              swSankhya: res?.monthlyForm?.swSankhya,
              visheshNondh: res?.monthlyForm?.visheshNondh,
            },
          });
        }
      },(err)=>{
        
      });
    } else {
      this.dateSelected = false;
      this.formGroup.reset();
    }
  }
  get selectedCategory() {
    return this.formGroup.controls['selectedCategory'].value;
  }
  get selectedSanskar() {
    return (this.formGroup.controls['weeklyForm'] as FormGroup).get('sanskar')!
      .value;
    //return temp.controls['sanskar'];
  }
  get samparkSelected() {
    return (this.formGroup.controls['monthlyForm'] as FormGroup).get('sampark')!
      .value;
  }
  getLastFiveThursdays(): void {
    const today = new Date();
    let count = 0;
    if (today.getDay() === 4) {
      this.lastFiveThursdays.push(new Date(today));
      count++;
    }
    while (count < 5) {
      today.setDate(today.getDate() - 1);
      if (today.getDay() === 4) {
        this.lastFiveThursdays.push(new Date(today));
        count++;
      }
    }
  }
  selectedAccordion(val: string) {
    this.formGroup.patchValue({
      selectedCategory: val,
    });
  }
  selectedLevelHeading(val: string) {
    this.formGroup.patchValue({
      weeklyForm: {
        sanskar: val,
      },
    });
  }
  getFormattedDate(date: any) {
    let year = new Date(date).getFullYear();
    let month = new Date(date).getMonth() + 1;
    let selDate = new Date(date).getDate();
    return selDate + '/' + month + '/' + year;
  }
  submitForm(form: any) {
    form.value.selectedDate = this.getFormattedDate( this.dateForm.controls['selectedDate'].value);
    form.value.vrutPrant = this.userData.prant;
    form.value.vrutVibhag = this.userData.vibhag;
    form.value.vrutJilla = this.userData.jilla;
    form.value.vrutTaluka = this.userData.taluka;
    form.value.vrutVasti = this.vrutVasti;
    form.value.vrutShakha = this.vrutShakha;
    if (this.selectedCategory == 'W') {
      form.value.monthlyForm = '';
      if (form.value.weeklyForm.sanskar == 'sanskar1') {
        form.value.weeklyForm.sanskar2Group = '';
      } else {
        form.value.weeklyForm.sanskar1Group = '';
      }
    } else if (this.selectedCategory == 'M') {
      form.value.weeklyForm = '';
      if (form.value.monthlyForm.sampark == 'No') {
        form.value.monthlyForm.swSankhya = '';
        form.value.monthlyForm.visheshNondh = '';
      }
    }
    console.log(form.value);
    if (this.formType == 'સબમિટ') {
      this._apiService
        .postData('http://localhost:4000/shakhaVrut', form.value)
        .subscribe((res) => {
          // this.showSnackBar = true;
          this.snackTimeOut()
          this.formGroup.reset();
          console.log(res);
        },(err)=>{
          
        });
    } else {
      this._apiService
        .udpateRecord(
          `http://localhost:4000/shakhaVrut/${this.formId}`,
          form.value
        )
        .subscribe((res) => {
          console.log(res);
          this.formGroup.reset();
          // this.showSnackBar = true;
          // this.snackTimeOut()
        });
    }

    this.formGroup.reset();
  }
  snackTimeOut() {
    setTimeout(() => {
      // this.snackMessage = null;
    }, 4000);
  }
}
