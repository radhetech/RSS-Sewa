import { Component } from '@angular/core';

@Component({
  selector: 'app-seva-karya',
  templateUrl: './seva-karya.component.html',
  styleUrl: './seva-karya.component.scss'
})
export class SevaKaryaComponent {
  selectedButton1:boolean = false;
  selectedButton2:boolean = false;
  selectedButton3:boolean = false;
  selectedButton4:boolean = false;
  showList1:boolean = false;
  showList2:boolean = false;
  showList3:boolean = false;
  showList4:boolean = false;
  showError:boolean=false;
  snackbarColour:string|null = null;
  loginerr: string | null = null;
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
  // toggleList(listNumber: number) {
  //   if (listNumber === 1) {
  //     if (!this.selectedButton1) {
  //       this.showList1 = false;
  //       this.selectedButton2 = false;
  //       this.selectedButton3 = false;
  //       this.selectedButton4 = false;
  //     }
  //     if (this.selectedButton1) {
  //       this.showList1 = true;
  //       this.showList2 = false;
  //       this.showList3 = false;
  //       this.showList4 = false;
  //       this.selectedButton2 = false;
  //       this.selectedButton3 = false;
  //       this.selectedButton4 = false;
  //     }
  //   } else if (listNumber === 2) {
  //     if (!this.selectedButton2) {
  //       this.showList2 = false;
  //       this.selectedButton1 = false;
  //       this.selectedButton3 = false;
  //       this.selectedButton4 = false;
  //     }
  //     if (this.selectedButton2) {
  //       this.showList2 = true;
  //       this.showList1 = false;
  //       this.showList4 = false;
  //       this.showList3 = false;
  //       this.selectedButton1 = false;
  //       this.selectedButton3 = false;
  //       this.selectedButton4 = false;
  //     }
  //   }
  //   else if (listNumber === 3) {
  //     if (!this.selectedButton3) {
  //       this.showList3 = false;
  //       this.selectedButton1 = false;
  //       this.selectedButton2 = false;
  //       this.selectedButton4 = false;
  //     }
  //     if (this.selectedButton3) {
  //       this.showList3 = true;
  //       this.showList2 = false;
  //       this.showList1 = false;
  //       this.showList4 = false;
  //       this.selectedButton1 = false;
  //       this.selectedButton2 = false;
  //       this.selectedButton4 = false;
  //     }
  //   }
  //   else if (listNumber === 4) {
  //     if (!this.selectedButton4) {
  //       this.showList4 = false;
  //       this.selectedButton1 = false;
  //       this.selectedButton2 = false;
  //       this.selectedButton3 = false;
  //     }
  //     if (this.selectedButton4) {
  //       this.showList4 = true;
  //       this.showList2 = false;
  //       this.showList3 = false;
  //       this.showList1 = false;
  //       this.selectedButton1 = false;
  //       this.selectedButton2 = false;
  //       this.selectedButton3 = false;
  //     }
  //   }
  // }

  isFormValid(){
    if (this.selectedButton1 && 
      this.checkedItems.sanskarKendra != null && 
      this.checkedItems.tuitionCenter != null &&
      this.checkedItems.higherEducationCoaching != null &&
      this.checkedItems.studyCenter!= null &&
      this.checkedItems.balwadi!= null &&
      this.checkedItems.primarySchool!= null &&
      this.checkedItems.secondarySchool!= null &&
      this.checkedItems.highSchool!= null &&
      this.checkedItems.competitiveExamCoaching!= null &&
      this.checkedItems.mobileLaboratory!= null &&
      this.checkedItems.bookBank!= null &&
      this.checkedItems.residentialSchool!= null &&
      this.checkedItems.hindiTeachingClass!= null &&
      this.checkedItems.adultEducation!= null &&
      this.checkedItems.schoolForDisabled!= null &&
      this.checkedItems.hostel!= null &&
      this.checkedItems.orphanage!= null &&
      this.checkedItems.singleTeacherSchool!= null) {
      return true;
    }
    if (this.selectedButton2 &&
      this.checkedItems.ruralHealthGuard != null &&
      this.checkedItems.healthAwarenessCenter != null &&
      this.checkedItems.mobileDispensary != null &&
      this.checkedItems.smallOPD != null &&
      this.checkedItems.divyangCamp != null &&
      this.checkedItems.largeHospital != null &&
      this.checkedItems.naturopathyCenter != null &&
      this.checkedItems.patientAssistance != null &&
      this.checkedItems.therapy != null &&
      this.checkedItems.bloodBank != null &&
      this.checkedItems.ambulanceService != null &&
      this.checkedItems.disabledServiceCenter != null &&
      this.checkedItems.hospital != null &&
      this.checkedItems.eyeBank != null &&
      this.checkedItems.leprosyService != null &&
      this.checkedItems.yogaEducationCenter != null &&
      this.checkedItems.medicineCenter != null &&
      this.checkedItems.deAddictionCenter != null
    ) {
      return true;
    }
    if (
      this.selectedButton3 &&
      this.checkedItems.bhajanMandali != null &&
      this.checkedItems.kishoriVikasKendra != null &&
      this.checkedItems.matrushayaOrphanage != null &&
      this.checkedItems.matruMandali != null &&
      this.checkedItems.deepPujaHavan != null &&
      this.checkedItems.jholaPustakalay != null &&
      this.checkedItems.annDaan != null &&
      this.checkedItems.mahilaAshram != null &&
      this.checkedItems.familyLegalCounseling != null &&
      this.checkedItems.antyaSanskarCenter != null &&
      this.checkedItems.orphanageforold != null &&
      this.checkedItems.library != null &&
      this.checkedItems.nursery != null &&
      this.checkedItems.elderlyService != null &&
      this.checkedItems.oldAgeHome != null &&
      this.checkedItems.juvenileCenterWork != null &&
      this.checkedItems.humanMilkBank != null &&
      this.checkedItems.womenEmpowerment != null) {
      return true;
    }
    if (this.selectedButton4 && 
      this.checkedItems.selfHelpGroup != null &&
      this.checkedItems.sewingCenter != null &&
      this.checkedItems.beautyTrainingCenter != null &&
      this.checkedItems.healthNurseTraining != null &&
      this.checkedItems.computerTraining != null &&
      this.checkedItems.examCoaching != null &&
      this.checkedItems.panchgavyaTraining != null &&
      this.checkedItems.cottageIndustryTraining != null &&
      this.checkedItems.handicrafts != null &&
      this.checkedItems.selfEmploymentCenter1 != null &&
      this.checkedItems.decorationFoodProduction != null &&
      this.checkedItems.selfEmploymentCenter2 != null &&
      this.checkedItems.repairFitting != null &&
      this.checkedItems.businessSkillTraining != null &&
      this.checkedItems.villageIndustry != null &&
      this.checkedItems.forestMedicineTraining != null &&
      this.checkedItems.foodProcessingTraining != null &&
      this.checkedItems.seedBank != null) {
      return true;
    }
    return false;
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
        sanskarKendra: this.checkedItems.sanskarKendra,
        tuitionCenter: this.checkedItems.tuitionCenter,
        higherEducationCoaching: this.checkedItems.higherEducationCoaching,
        studyCenter: this.checkedItems.studyCenter,
        balwadi: this.checkedItems.balwadi,
        primarySchool: this.checkedItems.primarySchool,
        secondarySchool: this.checkedItems.secondarySchool,
        highSchool: this.checkedItems.highSchool,
        competitiveExamCoaching: this.checkedItems.competitiveExamCoaching,
        mobileLaboratory: this.checkedItems.mobileLaboratory,
        bookBank: this.checkedItems.bookBank,
        residentialSchool: this.checkedItems.residentialSchool,
        hindiTeachingClass: this.checkedItems.hindiTeachingClass,
        adultEducation: this.checkedItems.adultEducation,
        schoolForDisabled: this.checkedItems.schoolForDisabled,
        hostel: this.checkedItems.hostel,
        orphanage: this.checkedItems.orphanage,
        singleTeacherSchool: this.checkedItems.singleTeacherSchool
      };
      result.push(section);
    }

    if (this.selectedButton2) {
      let section = {
        selectedsection: 'aayogya',
        ruralHealthGuard: this.checkedItems.ruralHealthGuard,
        healthAwarenessCenter: this.checkedItems.healthAwarenessCenter,
        mobileDispensary: this.checkedItems.mobileDispensary,
        smallOPD: this.checkedItems.smallOPD,
        divyangCamp: this.checkedItems.divyangCamp,
        largeHospital: this.checkedItems.largeHospital,
        naturopathyCenter: this.checkedItems.naturopathyCenter,
        patientAssistance: this.checkedItems.patientAssistance,
        therapy: this.checkedItems.therapy,
        bloodBank: this.checkedItems.bloodBank,
        ambulanceService: this.checkedItems.ambulanceService,
        disabledServiceCenter: this.checkedItems.disabledServiceCenter,
        hospital: this.checkedItems.hospital,
        eyeBank: this.checkedItems.eyeBank,
        leprosyService: this.checkedItems.leprosyService,
        yogaEducationCenter: this.checkedItems.yogaEducationCenter,
        medicineCenter: this.checkedItems.medicineCenter,
        deAddictionCenter: this.checkedItems.deAddictionCenter
      };
      result.push(section);
    }

    if (this.selectedButton3) {
      let section = {
        selectedsection: 'atmanirbharta',
        bhajanMandali: this.checkedItems.bhajanMandali,
        kishoriVikasKendra: this.checkedItems.kishoriVikasKendra,
        matrushayaOrphanage: this.checkedItems.matrushayaOrphanage,
        matruMandali: this.checkedItems.matruMandali,
        deepPujaHavan: this.checkedItems.deepPujaHavan,
        jholaPustakalay: this.checkedItems.jholaPustakalay,
        annDaan: this.checkedItems.annDaan,
        mahilaAshram: this.checkedItems.mahilaAshram,
        familyLegalCounseling: this.checkedItems.familyLegalCounseling,
        antyaSanskarCenter: this.checkedItems.antyaSanskarCenter,
        orphanageforold: this.checkedItems.orphanageforold,
        library: this.checkedItems.library,
        nursery: this.checkedItems.nursery,
        elderlyService: this.checkedItems.elderlyService,
        oldAgeHome: this.checkedItems.oldAgeHome,
        juvenileCenterWork: this.checkedItems.juvenileCenterWork,
        humanMilkBank: this.checkedItems.humanMilkBank,
        womenEmpowerment: this.checkedItems.womenEmpowerment
      };
      result.push(section);
    }
    if (this.selectedButton4) {
      let section = {
        selectedsection: 'samajik',
        selfHelpGroup: this.checkedItems.selfHelpGroup,
        sewingCenter: this.checkedItems.sewingCenter,
        beautyTrainingCenter: this.checkedItems.beautyTrainingCenter,
        healthNurseTraining: this.checkedItems.healthNurseTraining,
        computerTraining: this.checkedItems.computerTraining,
        examCoaching: this.checkedItems.examCoaching,
        panchgavyaTraining: this.checkedItems.panchgavyaTraining,
        cottageIndustryTraining: this.checkedItems.cottageIndustryTraining,
        handicrafts: this.checkedItems.handicrafts,
        selfEmploymentCenter1: this.checkedItems.selfEmploymentCenter1,
        decorationFoodProduction: this.checkedItems.decorationFoodProduction,
        selfEmploymentCenter2: this.checkedItems.selfEmploymentCenter2,
        repairFitting: this.checkedItems.repairFitting,
        businessSkillTraining: this.checkedItems.businessSkillTraining,
        villageIndustry: this.checkedItems.villageIndustry,
        forestMedicineTraining: this.checkedItems.forestMedicineTraining,
        foodProcessingTraining: this.checkedItems.foodProcessingTraining,
        seedBank: this.checkedItems.seedBank
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
    this.loginerr ="Form submitted successfully!";
    this.snackTimeOut();
}
snackTimeOut() {
  setTimeout(() => {
    this.loginerr = null;
    console.log(this.loginerr);
  }, 4000);
}
}
