import { Component } from '@angular/core';

@Component({
  selector: 'app-sakha-vrtta',
  templateUrl: './sakha-vrtta.component.html',
  styleUrl: './sakha-vrtta.component.scss'
})
export class SakhaVrttaComponent {
  selectedButton1 = false;
  selectedButton2 = false;
  showList1 = false;
  showList2 = false;
  showSubList1 = false;
  showSubList2 = false;
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

  toggleList(listNumber: number) {
    if (listNumber === 1) {
      if (!this.selectedButton1) {
        this.showList1 = false;
        this.selectedButton2 = false;
      }
      if (this.selectedButton1) {
        this.showList1 = true;
        this.showList2 = false;
        this.selectedButton2=false;
      }
    } else if (listNumber === 2) {
      if (!this.selectedButton2) {
        this.showList2 = false;
        this.selectedButton1 = false;
      }
      if (this.selectedButton2) {
        this.showList2 = true;
        this.showList1 = false;
        this.selectedButton1=false;
      }
    }
  }

  toggleMainCheckbox(mainCheckbox: string) {
    if (mainCheckbox === 'sanskar1') {
      this.checkedItems.sanskar1 = !this.checkedItems.sanskar1;
      if (this.checkedItems.sanskar1) {
        this.checkedItems.sanskar2 = false;
        this.showSubList1 = true;
        this.showSubList2 = false;
      } else {
        this.showSubList1 = false;
      }
    } else if (mainCheckbox === 'sanskar2') {
      this.checkedItems.sanskar2 = !this.checkedItems.sanskar2;
      if (this.checkedItems.sanskar2) {
        this.checkedItems.sanskar1 = false;
        this.showSubList1 = false;
        this.showSubList2 = true;
      } else {
        this.showSubList2 = false;
      }
    }
  }


  toggleHaNa(sublist:string) {
    if (sublist==='ha') {
      this.checkedItems.na = false;  
    }
    if(sublist==='na'){
      this.checkedItems.na = true;
      this.checkedItems.ha=false;
      this.checkedItems.option2 = null; 
      this.checkedItems.option3 = ''; 
    }
  }
}
