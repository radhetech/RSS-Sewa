import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { SnackbarComponent } from 'src/app/theme/shared/components/notification/snackbar.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-vahivat',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, CardComponent, SnackbarComponent],
  templateUrl: './vahivat.component.html',
  styleUrl: './vahivat.component.scss'
})
export class VahivatComponent implements OnInit, OnDestroy {
  adminForm: FormGroup;
  showSnackBar: boolean = false;
  snackbarColour: string = '';
  msg: string = '';
  talukaAdminForm: FormGroup;
  vibhagList: any = [];
  jillaList: any = [];
  talukaList: any = [];
  vastiList: any = [];
  shakhaList: any = [];
  talukaUser: boolean = false;
  userData: any;
  sevaVastiFlag: boolean = false;
  shakaListFlag: boolean = false;
  addVastiFlag: boolean = false;
  addShakhaFlag: boolean = false;
  vibhagUrl: string = "api/getVibhag";
  jillaUrl: string = "api/getJilla";
  talukaUrl: string = "api/getTaluka";
  vastiUrl: string = "api/getSevaVasti";
  shakhaUrl: string = "api/getShakha";
  private destroy$ = new Subject<void>();

  constructor(private ApiService: ApiService) {
    this.adminForm = new FormGroup({
      vibhag: new FormControl(''),
      jilla: new FormControl(''),
      taluka: new FormControl(''),
      vasti: new FormControl(''),
      shakha: new FormControl(''),
      newVasti: new FormControl(''),
      newShakha: new FormControl('')
    });
    this.talukaAdminForm = new FormGroup({
      vasti: new FormControl(''),
      shakha: new FormControl(''),
      newVasti: new FormControl(''),
      newShakha: new FormControl('')
    });
  }

  ngOnInit() {
    this.ApiService.getData(this.vibhagUrl)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.vibhagList = res;
        },
        error: () => { }
      });

    this.userData = this.ApiService.getUserData();
    if (this.userData.authorities[0] == 'taluka') {
      this.talukaUser = true;
      this.talukaChange2(this.userData.taluka.talukaId);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  vibhagChange(e: any) {
    console.log(e.target.value);
    this.jillaList = [];
    this.talukaList = [];
    this.vastiList = [];
    this.shakhaList = [];
    this.sevaVastiFlag = false;
    this.shakaListFlag = false;

    this.ApiService.getData(`${this.jillaUrl}/${e.target.value}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.jillaList = res;
        },
        error: () => { }
      });
  }

  jillaChange(e: any) {
    this.sevaVastiFlag = false;
    this.shakaListFlag = false;
    this.talukaList = [];
    this.vastiList = [];
    this.shakhaList = [];

    this.ApiService.getData(`${this.talukaUrl}/${e.target.value}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.talukaList = res;
        },
        error: () => { }
      });
    console.log(this.talukaList);
  }

  talukaChange(e: any) {
    this.adminForm.get('vasti').reset();
    this.adminForm.get('newVasti').reset();
    this.vastiList = [];
    this.shakhaList = [];

    this.ApiService.getData(`${this.vastiUrl}/${e.target.value}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.vastiList = res;
          this.sevaVastiFlag = true;
        },
        error: () => { }
      });
    console.log(this.vastiList);
  }

  talukaChange2(e: any) {
    this.talukaAdminForm.get('vasti').reset();
    this.talukaAdminForm.get('newVasti').reset();
    this.vastiList = [];
    this.shakhaList = [];

    this.ApiService.getData(`${this.vastiUrl}/${e}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.vastiList = res;
          this.sevaVastiFlag = true;
        },
        error: () => { }
      });
    console.log(this.vastiList);
  }

  vastiChange(e: any) {
    this.adminForm.get('shakha').reset();
    this.adminForm.get('newShakha').reset();
    this.talukaAdminForm.get('shakha').reset();
    this.talukaAdminForm.get('newShakha').reset();
    this.addShakhaFlag = false;
    this.shakaListFlag = true;

    if (e.target.value == 'addVasti') {
      this.addVastiFlag = true;
      this.shakaListFlag = false;
    }

    this.ApiService.getData(`${this.shakhaUrl}/${e.target.value}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.shakhaList = res;
        },
        error: () => { }
      });
    console.log(this.shakhaList);
  }

  addVasti(val: any) {
    console.log(val);
    const pushedVal: any = {
      sevaVastiName: this.adminForm.controls['newVasti'].value,
      talukaId: this.adminForm.controls['taluka'].value
    };

    this.ApiService.postData('api/sevaVasti/save', pushedVal)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.vastiList.push(res);
        this.showSnackBar = true;
        this.snackbarColour = 'success';
        this.msg = "સેવા વસ્તી સફળતાપૂર્વક ઉમેરાઈ ગઈ છે";
      }, (err) => {
        this.showSnackBar = true;
        this.snackbarColour = 'error';
        this.msg = 'ફરી  પ્રયત્ન કરો અથવા એડમીન ને સંપર્ક કરો.';
      });

    this.adminForm.get('vasti').reset();
    this.adminForm.get('newVasti').reset();
    this.addVastiFlag = false;
    this.snackTimeOut();
  }

  addVasti2(val: any) {
    console.log(val);
    const pushedVal: any = {
      sevaVastiName: this.talukaAdminForm.controls['newVasti'].value,
      talukaId: this.userData.taluka.talukaId
    };

    this.ApiService.postData('api/sevaVasti/save', pushedVal)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.vastiList.push(res);
        this.showSnackBar = true;
        this.snackbarColour = 'success';
        this.msg = 'સેવા વસ્તી  સફળતાપૂર્વક ઉમેરાઈ ગઈ છે';
      }, (err) => {
        this.showSnackBar = true;
        this.snackbarColour = 'error';
        this.msg = 'ફરી  પ્રયત્ન કરો અથવા એડમીન ને સંપર્ક કરો.';
      });
    this.snackTimeOut();
    this.talukaAdminForm.get('vasti').reset();
    this.talukaAdminForm.get('newVasti').reset();
    this.addVastiFlag = false;
  }

  addShakha(val: any) {
    console.log(val);
    const pushedShakha: any = {
      shakhaName: this.adminForm.controls['newShakha'].value,
      sevaVastiId: this.adminForm.controls['vasti'].value
    };

    this.ApiService.postData('api/shakha/save', pushedShakha)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        console.log(res);
        this.ApiService.getData(`${this.shakhaUrl}/${this.adminForm.controls['vasti'].value}`)
          .pipe(takeUntil(this.destroy$))
          .subscribe((res: any) => {
            this.showSnackBar = true;
            this.snackbarColour = 'success';
            this.msg = "શાખા સફળતાપૂર્વક ઉમેરાઈ ગઈ છે";
            this.shakhaList = res;
            this.adminForm.controls['shakha'].setValue('');
          });

        this.shakhaList.push(res);
      }, (err) => {
        this.showSnackBar = true;
        this.snackbarColour = 'error';
        this.msg = 'ફરી  પ્રયત્ન કરો અથવા એડમીન ને સંપર્ક કરો.';
      });
      this.snackTimeOut();

    this.adminForm.controls['shakha'].setValue('');
    this.adminForm.controls['shakha'].reset();
    this.adminForm.controls['newShakha'].reset();
    console.log(this.shakhaList);
  }

  addShakha2(val: any) {
    console.log(val);
    const pushedShakha: any = {
      shakhaName: this.talukaAdminForm.controls['newShakha'].value,
      sevaVastiId: this.talukaAdminForm.controls['vasti'].value
    };

    this.ApiService.postData('api/shakha/save', pushedShakha)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        console.log(res);
        this.ApiService.getData(`${this.shakhaUrl}/${this.adminForm.controls['vasti'].value}`)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res: any) => {
              this.showSnackBar = true;
              this.snackbarColour = 'success';
              this.msg = "શાખા સફળતાપૂર્વક ઉમેરાઈ ગઈ છે";
              this.shakhaList = res;
            }
          });

        this.shakhaList.push(res);
      }, (err) => {
        this.showSnackBar = true;
        this.snackbarColour = 'error';
        this.msg = 'ફરી  પ્રયત્ન કરો અથવા એડમીન ને સંપર્ક કરો.';
      });
   this.snackTimeOut();
    this.talukaAdminForm.controls['shakha'].setValue('');
    this.talukaAdminForm.controls['shakha'].reset();
    this.talukaAdminForm.controls['newShakha'].reset();
    console.log(this.shakhaList);
  }

  shakhaChange(e: any) {
    if (e.target.value == 'addSakha') {
      this.addShakhaFlag = true;
    }
  }

  onSubmit(formData: any) {
    console.log(formData.value);
  }
  snackTimeOut() {
    setTimeout(() => {
      this.showSnackBar = null;
      console.log(this.showSnackBar);
    }, 3000);
  }
}