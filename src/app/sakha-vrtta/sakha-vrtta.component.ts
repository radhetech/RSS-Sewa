import { Component } from '@angular/core';

@Component({
  selector: 'app-sakha-vrtta',
  templateUrl: './sakha-vrtta.component.html',
  styleUrl: './sakha-vrtta.component.scss'
})
export class SakhaVrttaComponent {
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

  checkSubmitValidity(): void {

    if (this.selectedButton == 1) {
      if (this.selectedSanskar === 'sanskar1') {
        if (this.checkedItems.sanskar1_1 || this.checkedItems.sanskar1_2 || this.checkedItems.sanskar1_3) {

          this.submitDisabled = false; // Enable submit button
        } else {
          this.submitDisabled = true; // Disable submit button 
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
submitForm(): void {
  let formData: any;

  if (this.selectedButton == 1) {
      formData = {
          samparkType: 'sewadin',
          sanskar: this.selectedSanskar,
          sanskarList: Object.keys(this.checkedItems)
              .filter(key => {
                  // console.log('Key:', key, 'Checked:', this.checkedItems[key]); 
                  return key.startsWith(this.selectedSanskar!) && this.checkedItems[key];
              })
              .map(key => {
                  const splitKey = key.split('_');
                  // console.log('Split Key:', splitKey); 
                  return splitKey[1];
              })
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





// submitForm(): void {
//   let formData: any;
//   if(this.selectedButton == 1) {
//   formData = {
//     samparkType: 'sewadin',
//     sanskar: this.selectedSanskar,
//     sanskarList: Object.keys(this.checkedItems)
//       .filter(key => key.startsWith(this.selectedSanskar!) && this.checkedItems[key])
//       .map(key => key.split('_')[1])
//   };
// } else if (this.selectedButton == 2) {
//   formData = {
//     samparkType: 'masikseva',
//     samapark: this.checkedItems.ha, // assuming 'ha' is for "Yes" option
//     sss: this.checkedItems.option2 || null, // assuming this is the number input field
//     note: this.checkedItems.option3 // assuming this is the textarea input field
//   };
// }

// console.log('Form Data:', formData);
//   }

