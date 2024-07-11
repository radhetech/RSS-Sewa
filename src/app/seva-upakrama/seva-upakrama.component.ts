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
  selectedButton3 = false;
  selectedButton4 = false;
  showList1 = false;
  showList2 = false;
  showList3 = false;
  showList4 = false;
  showError: boolean = false;
  snackbarColour: string | null = null;
  loginerr: string | null = null;
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
    switch (listNumber) {
      case 1:
        this.showList1 = !this.showList1;
        break;
      case 2:
        this.showList2 = !this.showList2;
        break;
      case 3:
        this.showList3 = !this.showList3;
        break;
      case 4:
        this.showList4 = !this.showList4;
        break;
    }
  }   
  selectMainOption(option: number) {
    switch (option) {
      case 1:
        this.selectedButton1 = !this.selectedButton1;
        this.toggleList(1);
        break;
      case 2:
        this.selectedButton2 = !this.selectedButton2;
        this.toggleList(2);
        break;
      case 3:
        this.selectedButton3 = !this.selectedButton3;
        this.toggleList(3);
        break;
      case 4:
        this.selectedButton4 = !this.selectedButton4;
        this.toggleList(4);
        break;
    }
  }
  selectSanskarOption(option: string) {
    this.checkedItems[option] = this.checkedItems[option] === null ? 0 : null;
  }

  isFormValid() {
    let isValid = false;
  
    if (this.selectedButton1) {
      isValid =
        this.checkedItems.educationMaterialDistribution !== null &&
        this.checkedItems.examGuidanceCamp !== null &&
        this.checkedItems.feeAssistance !== null &&
        this.checkedItems.personalityDevelopmentCamp !== null;
    } else if (this.selectedButton2) {
      isValid =
        this.checkedItems.bloodDonationCamp !== null &&
        this.checkedItems.healthCamp !== null &&
        this.checkedItems.eyeCheckupCamp !== null &&
        this.checkedItems.yogaCamp !== null &&
        this.checkedItems.divyangCamp !== null &&
        this.checkedItems.bloodDonorList !== null &&
        this.checkedItems.firstAidTraining !== null &&
        this.checkedItems.counseling !== null &&
        this.checkedItems.deAddictionCamp !== null;
    } else if (this.selectedButton3) {
      isValid =
        this.checkedItems.professionalTrainingCamp !== null &&
        this.checkedItems.panchgavyaTrainingCamp !== null &&
        this.checkedItems.rakdiMaking !== null &&
        this.checkedItems.electricMalaConstruction !== null &&
        this.checkedItems.decorativeMaterialProduction !== null &&
        this.checkedItems.diwaliLampMaking !== null &&
        this.checkedItems.sweetsAndSnacksProduction !== null &&
        this.checkedItems.managerialTraining !== null &&
        this.checkedItems.organicFertilizerTraining !== null;
    } else if (this.selectedButton4) {
      isValid =
        this.checkedItems.girlWorship !== null &&
        this.checkedItems.massMarriage !== null &&
        this.checkedItems.templeCleanliness !== null &&
        this.checkedItems.publicCleanliness !== null &&
        this.checkedItems.waterConservationPondConstruction !== null &&
        this.checkedItems.roadConstruction !== null &&
        this.checkedItems.communityCelebration !== null &&
        this.checkedItems.treePlantation !== null &&
        this.checkedItems.sportsCompetition !== null &&
        this.checkedItems.blanketSweaterDelivery !== null &&
        this.checkedItems.foodDonation !== null;
    }

    return isValid;
  }
    
  onSubmit(form: any) {
    if (!this.isFormValid()) {
      this.showError = true;
      this.loginerr = "Please fill all the mandatory fields.";
      this.snackbarColour = 'error';
      this.snackTimeOut();
      return;
    }
    this.showError = false;
    let result = [];
    if (this.selectedButton1) {
      let section = {
        selectedsection: 'shiksan',
        educationMaterialDistribution: this.checkedItems.educationMaterialDistribution,
        examGuidanceCamp: this.checkedItems.examGuidanceCamp,
        feeAssistance: this.checkedItems.feeAssistance,
        personalityDevelopmentCamp: this.checkedItems.personalityDevelopmentCamp
      };
      result.push(section);
    }

    if (this.selectedButton2) {
      let section = {
        bloodDonationCamp: this.checkedItems.bloodDonationCamp,
        healthCamp: this.checkedItems.healthCamp,
        eyeCheckupCamp: this.checkedItems.eyeCheckupCamp,
        yogaCamp: this.checkedItems.yogaCamp,
        divyangCamp: this.checkedItems.divyangCamp,
        bloodDonorList: this.checkedItems.bloodDonorList,
        firstAidTraining: this.checkedItems.firstAidTraining,
        counseling: this.checkedItems.counseling,
        deAddictionCamp: this.checkedItems.deAddictionCamp
      };
      result.push(section);
    }

    if (this.selectedButton3) {
      let section = {
        selectedsection: 'atmanirbharta',
        professionalTrainingCamp: this.checkedItems.professionalTrainingCamp,
        panchgavyaTrainingCamp: this.checkedItems.panchgavyaTrainingCamp,
        rakdiMaking: this.checkedItems.rakdiMaking,
        electricMalaConstruction: this.checkedItems.electricMalaConstruction,
        decorativeMaterialProduction: this.checkedItems.decorativeMaterialProduction,
        diwaliLampMaking: this.checkedItems.diwaliLampMaking,
        sweetsAndSnacksProduction: this.checkedItems.sweetsAndSnacksProduction,
        managerialTraining: this.checkedItems.managerialTraining,
        organicFertilizerTraining: this.checkedItems.organicFertilizerTraining
      };
      result.push(section);
    }
    if (this.selectedButton4) {
      let section = {
        selectedsection: 'samajik',
        girlWorship: this.checkedItems.girlWorship,
        massMarriage: this.checkedItems.massMarriage,
        templeCleanliness: this.checkedItems.templeCleanliness,
        publicCleanliness: this.checkedItems.publicCleanliness,
        waterConservationPondConstruction: this.checkedItems.waterConservationPondConstruction,
        roadConstruction: this.checkedItems.roadConstruction,
        communityCelebration: this.checkedItems.communityCelebration,
        treePlantation: this.checkedItems.treePlantation,
        sportsCompetition: this.checkedItems.sportsCompetition,
        blanketSweaterDelivery: this.checkedItems.blanketSweaterDelivery,
        foodDonation: this.checkedItems.foodDonation,
      };
      result.push(section);
    }
    console.log(result);
    form.reset()
    this.showError = false;
    this.showList1 = false;
    this.showList2 = false;
    this.showList3 = false;
    this.showList4 = false;
    this.snackbarColour = 'success';
    this.loginerr = "Form submitted successfully!";
    this.snackTimeOut();
  }
  snackTimeOut() {
    setTimeout(() => {
      this.loginerr = null;
      console.log(this.loginerr);
    }, 4000);
  }
}
