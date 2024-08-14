import { Component, DoCheck, OnInit } from '@angular/core';
import { valueSelect } from '../services/valueSelect.service';

@Component({
  selector: 'app-sakha-vrut',
  templateUrl: './sakha-vrut.component.html',
  styleUrl: './sakha-vrut.component.scss'
})
export class SakhaVrutComponent implements OnInit, DoCheck{
  showComponent:boolean =false;
  selectedShakha:string = '';
  selectedVasti:string = '';
  selectedButton: number | null = null;
  selectedSanskar: string | null = null;
  showList1 = false;
  showList2 = false;
  showSubList1 = false;
  showSubList2 = false;
  submitDisabled: boolean = true;
  checkedItems: any = {
    sanskar1: false,
    sanskar1_1: false,
    sanskar1_2: false,
    sanskar1_3: false,
    sanskar2: false,
    sanskar2_1: false,
    sanskar2_2: false,
    ha: false,
    na: false,
    option2: null,
    option3: ''
  };
  dateOptions: string[] = [];
  lastFiveThursdays: Date[] = [];
  isShakhaSelected = true;
  isVastiSelected = true;
  constructor(private valueSel:valueSelect) {
    this.getLastFiveThursdays();
    this.dateOptions.push('Jul 4 2024'); 
  }
  ngOnInit(): void {
   this.valueSel.getCurrentShakha().subscribe((res)=>{
     if(res!='શાખા'){
     console.log('shakha-v-service',res)
      this.isShakhaSelected = false;
      // this.isShakhaSelected = true;
      // this.selectedShakha = res;
     } else {
      this.isShakhaSelected = true;
     }
   })
   this.valueSel.getCurrentVasti().subscribe((res)=>{
    if(res!='વસ્તી'){
     this.isVastiSelected = false;
     this.isShakhaSelected = true;
     console.log('vasti-v-service',res)
    // this.selectedVasti = res;
    } else {
      this.isVastiSelected = true;
    }
  })
    
    // console.log('shkhaVrut', this.selectedVasti)
    // console.log('shkhaVrut', this.selectedShakha)
  }
  ngDoCheck(){
      
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

  onDateChange(event: any): void {
  
    console.log('Selected date:', event.target.value);
  }

  onThursdayChange(event: any): void {
   
    console.log('Selected Thursday:', event.target.value);
  }

  checkSubmitValidity(): void {
    if (this.selectedButton == 1) {
      if (this.selectedSanskar === 'sanskar1') {
        if (this.checkedItems.sanskar1_1 || this.checkedItems.sanskar1_2 || this.checkedItems.sanskar1_3) {
          this.submitDisabled = false; 
        } else {
          this.submitDisabled = true;  
        }
      } else if (this.selectedSanskar === 'sanskar2') {
        if (this.checkedItems.sanskar2_1 || this.checkedItems.sanskar2_2) {
          this.submitDisabled = false; 
        } else {
          this.submitDisabled = true; 
        }
      }
    } else if (this.selectedButton == 2) {
      if (this.checkedItems.ha) {
        if (this.checkedItems.option2 != null) {
          this.submitDisabled = false; 
        } else {
          this.submitDisabled = true; 
        }
      } else if (this.checkedItems.na) {
        this.submitDisabled = false; 
      } else {
        this.submitDisabled = true;
      }
    } else {
      this.submitDisabled = true; 
    }
  }

  toggleList(listNumber: number) {
    if (listNumber === 1) {
      this.showList1 = true;
      this.showList2 = false;
      this.selectedSanskar = null;
      this.showSubList1 = false;
      this.showSubList2 = false;
    } else if (listNumber === 2) {
      this.showList2 = true;
      this.showList1 = false;
      this.selectedSanskar = null;
      this.showSubList1 = false;
      this.showSubList2 = false;
    }
    this.checkSubmitValidity();
  }

  toggleMainCheckbox(mainCheckbox: string) {
    if (mainCheckbox === 'sanskar1') {
      this.checkedItems.sanskar1 = true;
      this.checkedItems.sanskar2 = false;
      this.showSubList1 = true;
      this.showSubList2 = false;
    } else if (mainCheckbox === 'sanskar2') {
      this.checkedItems.sanskar2 = true;
      this.checkedItems.sanskar1 = false;
      this.showSubList1 = false;
      this.showSubList2 = true;
    }
    this.checkSubmitValidity();
  }

  toggleHaNa(sublist: string) {
    if (sublist === 'ha') {
      this.checkedItems.ha = true;
      this.checkedItems.na = false;
    } else if (sublist === 'na') {
      this.checkedItems.na = true;
      this.checkedItems.ha = false;
      this.checkedItems.option2 = null;
      this.checkedItems.option3 = '';
    }
    this.checkSubmitValidity();
  }

  selectMainOption(option: number) {
    this.selectedButton = option;
    this.toggleList(option);
  }

  selectSanskarOption(option: string) {
    this.selectedSanskar = option;
    this.toggleMainCheckbox(option);
  }

  toggleCheckbox(checkbox: string) {
    this.checkedItems[checkbox] = !this.checkedItems[checkbox];
    this.checkSubmitValidity();
  }

  submitForm(): void {
    let formData: any;

    if (this.selectedButton == 1) {
      formData = {
        samparkType: 'sewadin',
        sanskar: this.selectedSanskar,
        sanskarList: Object.keys(this.checkedItems)
          .filter(key => key.startsWith(this.selectedSanskar!) && this.checkedItems[key])
          .map(key => key.split('_')[1])
          .filter(value => value !== undefined)
      };
    } else if (this.selectedButton == 2) {
      formData = {
        samparkType: 'masikseva',
        samapark: this.checkedItems.ha, 
        sss: this.checkedItems.option2 || null, 
        note: this.checkedItems.option3
      };
    }

    console.log('Form Data:', formData);
  }
}
