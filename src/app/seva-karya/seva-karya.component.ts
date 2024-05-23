import { Component } from '@angular/core';

@Component({
  selector: 'app-seva-karya',
  templateUrl: './seva-karya.component.html',
  styleUrl: './seva-karya.component.scss'
})
export class SevaKaryaComponent {
  selectedButton1 = false;
  selectedButton2 = false;
  selectedButton3=false;
  selectedButton4=false;
  showList1 = false;
  showList2 = false;
  showList3=false;
  showList4=false;
  checkedItems: any = {
    sanskarKendra: null,
    tuitionCenter: null,
    higherEducationCoaching: null,
    studyCenter: null,
    balwadi: null,
    primarySchool: null,
    secondarySchool: null,
    highSchool: null,
    competitiveExamCoaching: null,
    mobileLaboratory: null,
    bookBank: null,
    residentialSchool: null,
    hindiTeachingClass: null,
    adultEducation: null,
    schoolForDisabled: null,
    hostel: null,
    orphanage: null,
    singleTeacherSchool: null,
    ruralHealthGuard: null,
    healthAwarenessCenter: null,
    mobileDispensary: null,
    smallOPD: null,
    divyangCamp: null,
    largeHospital: null,
    naturopathyCenter: null,
    patientAssistance: null,
    therapy: null,
    bloodBank: null,
    ambulanceService: null,
    disabledServiceCenter: null,
    hospital: null,
    eyeBank: null,
    leprosyService: null,
    yogaEducationCenter: null,
    medicineCenter: null,
    deAddictionCenter: null,
    bhajanMandali: null,
    kishoriVikasKendra: null,
    matrushayaOrphanage: null,
    matruMandali: null,
    deepPujaHavan: null,
    jholaPustakalay: null,
    annDaan: null,
    mahilaAshram: null,
    familyLegalCounseling: null,
    antyaSanskarCenter: null,
    orphanageforold: null,
    library: null,
    nursery: null,
    elderlyService: null,
    oldAgeHome: null,
    juvenileCenterWork: null,
    humanMilkBank: null,
    womenEmpowerment: null,
    selfHelpGroup: null,
    sewingCenter: null,
    beautyTrainingCenter: null,
    healthNurseTraining: null,
    computerTraining: null,
    examCoaching: null,
    panchgavyaTraining: null,
    cottageIndustryTraining: null,
    handicrafts: null,
    selfEmploymentCenter1: null,
    decorationFoodProduction: null,
    selfEmploymentCenter2: null,
    repairFitting: null,
    businessSkillTraining: null,
    villageIndustry: null,
    forestMedicineTraining: null,
    foodProcessingTraining: null,
    seedBank: null

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
