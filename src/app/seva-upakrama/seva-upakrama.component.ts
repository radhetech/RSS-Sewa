import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seva-upakrama',
  templateUrl: './seva-upakrama.component.html',
  styleUrl: './seva-upakrama.component.scss'
})
export class SevaUpakramaComponent {
  selectedButton1 = false;
  selectedButton2 = false;
  selectedButton3=false;
  selectedButton4=false;
  showList1 = false;
  showList2 = false;
  showList3=false;
  showList4=false;
  checkedItems: any = {
    educationMaterialDistribution: null,
    examGuidanceCamp: null,
    feeAssistance: null,
    personalityDevelopmentCamp: null,
    bloodDonationCamp: null,
    healthCamp: null,
    eyeCheckupCamp: null,
    yogaCamp: null,
    divyangCamp: null,
    bloodDonorList: null,
    firstAidTraining: null,
    counseling: null,
    deAddictionCamp: null,
    professionalTrainingCamp: null,
    panchgavyaTrainingCamp: null,
    rakdiMaking: null,
    electricMalaConstruction: null,
    decorativeMaterialProduction: null,
    diwaliLampMaking: null,
    sweetsAndSnacksProduction: null,
    managerialTraining: null,
    organicFertilizerTraining: null,
    girlWorship: null,
    massMarriage: null,
    templeCleanliness: null,
    publicCleanliness: null,
    waterConservationPondConstruction: null,
    roadConstruction: null,
    communityCelebration: null,
    treePlantation: null,
    sportsCompetition: null,
    blanketSweaterDelivery: null,
    foodDonation: null
  };

  toggleList(listNumber: number) {
    if (listNumber === 1) {
      if (!this.selectedButton1) {
        this.showList1 = false;
        this.selectedButton2 = false;
        this.selectedButton3 = false;
        this.selectedButton4 = false;
      }
      if (this.selectedButton1) {
        this.showList1 = true;
        this.showList2 = false;
        this.showList3 = false;
        this.showList4 = false;
        this.selectedButton2=false;
        this.selectedButton3 = false;
        this.selectedButton4 = false;
      }
    } else if (listNumber === 2) {
      if (!this.selectedButton2) {
        this.showList2 = false;
        this.selectedButton1 = false;
        this.selectedButton3 = false;
        this.selectedButton4 = false;
      }
      if (this.selectedButton2) {
        this.showList2 = true;
        this.showList1 = false;
        this.showList4 = false;
        this.showList3 = false;
        this.selectedButton1=false;
        this.selectedButton3 = false;
        this.selectedButton4 = false;
      }
    }
    else if (listNumber === 3) {
      if (!this.selectedButton3) {
        this.showList3 = false;
        this.selectedButton1 = false;
        this.selectedButton2=false;
        this.selectedButton4 = false;
      }
      if (this.selectedButton3) {
        this.showList3 = true;
        this.showList2 = false;
        this.showList1 = false;
        this.showList4 = false;
        this.selectedButton1=false;
        this.selectedButton2=false;
        this.selectedButton4 = false;
      }
    }
    else if (listNumber === 4) {
      if (!this.selectedButton4) {
        this.showList4 = false;
        this.selectedButton1 = false;
        this.selectedButton2=false;
        this.selectedButton3 = false;
      }
      if (this.selectedButton4) {
        this.showList4 = true;
        this.showList2 = false;
        this.showList3 = false;
        this.showList1 = false;
        this.selectedButton1=false;
        this.selectedButton2=false;
        this.selectedButton3 = false;
      }
    }
  }
  onSubmit(abc:any) {
    const formData = {
      selectedButton1: this.selectedButton1,
      selectedButton2: this.selectedButton2,
      selectedButton3: this.selectedButton3,
      selectedButton4: this.selectedButton4,
      checkedItems: this.checkedItems
    };

    console.log('Form Data:', formData);
    abc.reset()
  }
}
