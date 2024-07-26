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
  showOthersShiksha: boolean = false;
  showOthersAayogya: boolean = false;
  showOthersSawval: boolean = false;
  showOthersSamajik:Boolean= false;
  activeCategory:number=0

  educationItems = [
    { label: 'સંસ્કાર કેન્દ્ર / બાળ ગોકુલમ', name: 'sanskarKendra', showInputs: false },
    { label: 'પાઠદાન કેન્દ્ર / ટ્યુશન કેન્દ્ર', name: 'tuitionCenter', showInputs: false },
    { label: 'ઉચ્ચ શિક્ષણ કોચિંગ', name: 'higherEducationCoaching', showInputs: false },
    { label: 'અભ્યાસિકા', name: 'studyCenter', showInputs: false },
    { label: 'બાલવાડી', name: 'balwadi', showInputs: false },
    { label: 'પ્રાથમિક શાળા (કક્ષા 5 સુધી)', name: 'primarySchool', showInputs: false },
    { label: 'માધ્યમિક શાળા (કક્ષા 8 સુધી)', name: 'secondarySchool', showInputs: false },
    { label: 'હાઇસ્કૂલ', name: 'highSchool', showInputs: false },
    { label: 'સ્પર્ધાત્મક પરીક્ષા કોચિંગ (ઉચ્ચ શિક્ષણ માટે)', name: 'competitiveExamCoaching', showInputs: false },
    { label: 'ચલિત પ્રયોગશાળા', name: 'mobileLaboratory', showInputs: false },
    { label: 'પુસ્તક પેટી બેંક', name: 'bookBank', showInputs: false },
    { label: 'નિર્વાહક શાળા / ગુરુકુલ', name: 'residentialSchool', showInputs: false },
    { label: 'હિન્દી શિક્ષણ વર્ગ', name: 'hindiTeachingClass', showInputs: false },
    { label: 'પ્રૌઢ શિક્ષણ / સાક્ષરતા કાર્યક્રમ', name: 'adultEducation', showInputs: false },
    { label: 'દિવ્યાંગો માટે શાળા', name: 'schoolForDisabled', showInputs: false },
    { label: 'છાત્રાલય', name: 'hostel', showInputs: false },
    { label: 'નિરાશ્રિત બાળક-બાળિકા સદન', name: 'orphanage', showInputs: false },
    { label: 'એકલ વિદ્યાાલય', name: 'singleTeacherSchool', showInputs: false },
  ];
  healthItems = [
    { label: 'ગ્રામીણ આરોગ્ય રક્ષક / મિત્ર, પેટિકા', name: 'ruralHealthGuard', showInputs: false },
    { label: 'આરોગ્ય જાગૃતિ કેન્દ્ર', name: 'healthAwarenessCenter', showInputs: false },
    { label: 'ચલિત દવાખાનું (Mobile Dispensary)', name: 'mobileDispensary', showInputs: false },
    { label: 'સ્થિર દવાખાનું (O.P.D.) નાનું', name: 'smallOPD', showInputs: false },
    { label: 'દિવ્યાંગ શિબિર/સાધન વિતરણ', name: 'divyangCamp', showInputs: false },
    { label: 'સ્થિર દવાખાનું (રહેવાનું) / હોસ્પિટલ (મોટું)', name: 'largeHospital', showInputs: false },
    { label: 'પ્રાકૃતિક ચિકિત્સા કેન્દ્ર', name: 'naturopathyCenter', showInputs: false },
    { label: 'રોગી સહાયતા', name: 'patientAssistance', showInputs: false },
    { label: 'ન્યુરોथेરીપી, ફિઝિયોથેરીપી, યોગ થેરાપી', name: 'therapy', showInputs: false },
    { label: 'રક્ત કોષ / બ્લડ બેંક', name: 'bloodBank', showInputs: false },
    { label: 'રોગી વાહન સેવા', name: 'ambulanceService', showInputs: false },
    { label: 'દિવ્યાંગ સેવા કેન્દ્ર', name: 'disabledServiceCenter', showInputs: false },
    { label: 'દવાખાનું', name: 'hospital', showInputs: false },
    { label: 'નેત્ર બેંક', name: 'eyeBank', showInputs: false },
    { label: 'કુષ્ટ રોગી સેવા', name: 'leprosyService', showInputs: false },
    { label: 'યોગ શિક્ષણ કેન્દ્ર', name: 'yogaEducationCenter', showInputs: false },
    { label: 'ઔષધિ કેન્દ્ર', name: 'medicineCenter', showInputs: false },
    { label: 'નશા મુક્તિ કેન્દ્ર', name: 'deAddictionCenter', showInputs: false }
  ];
  swavalambanItems = [
    { label: 'સ્વયં સહાયતા જૂથ વૈભવ શ્રી', name: 'selfHelpGroup', showInputs: false },
    { label: 'સિલાઈ કેન્દ્ર', name: 'sewingCenter', showInputs: false },
    { label: 'સૌંદર્ય તાલીમ કેન્દ્ર', name: 'beautyTrainingCenter', showInputs: false },
    { label: 'હેલ્થ નર્સ ટ્રેનિંગ, હોમ નર્સિંગ', name: 'healthNurseTraining', showInputs: false },
    { label: 'કમ્પ્યુટર તાલીમ', name: 'computerTraining', showInputs: false },
    { label: 'સ્પર્ધાત્મક પરીક્ષા કોચિંગ (રોજગાર માટે)', name: 'examCoaching', showInputs: false },
    { label: 'ગૌ ઉત્પાદન, પંચગવ્ય ઉત્પાદન તાલીમ', name: 'panchgavyaTraining', showInputs: false },
    { label: 'કુટીર ઉદ્યોગ તાલીમ', name: 'cottageIndustryTraining', showInputs: false },
    { label: 'હસ્તકલા', name: 'handicrafts', showInputs: false },
    { label: 'સ્વરોજગાર કેન્દ્ર - 1- રાખી, ઇલેક્ટ્રિક લડીઓ, દીપક', name: 'selfEmploymentCenter1', showInputs: false },
    { label: 'સજાવટ, ખાદ્ય સામગ્રી વગેરે ઉત્પાદન', name: 'decorationFoodProduction', showInputs: false },
    { label: 'સ્વરોજગાર કેન્દ્ર- 2- ઇલેક્ટ્રિક, નળ', name: 'selfEmploymentCenter2', showInputs: false },
    { label: 'રિપેરીંગ અને ફિટિંગ', name: 'repairFitting', showInputs: false },
    { label: 'વ્યવસાય અને કુશળ તાલીમ', name: 'businessSkillTraining', showInputs: false },
    { label: 'ગામ ઉદ્યોગ', name: 'villageIndustry', showInputs: false },
    { label: 'વન ઔષધી આધારિત ઉત્પાદન તાલીમ', name: 'forestMedicineTraining', showInputs: false },
    { label: 'અન્ન અને ફળ પ્રક્રિયા તાલીમ', name: 'foodProcessingTraining', showInputs: false },
    { label: 'બીજ કોષ', name: 'seedBank', showInputs: false }
  ];
  socialItems = [
    { name: 'bhajanMandali', label: 'ભજન મંડળી', showInputs: false },
    { name: 'kishoriVikasKendra', label: 'કિશોરી વિકાસ કેન્દ્ર', showInputs: false },
    { name: 'matrushayaOrphanage', label: 'માતૃછાયા / અનાથ શિશુ ગૃહ', showInputs: false },
    { name: 'matruMandali', label: 'માતૃ મંડળી', showInputs: false },
    { name: 'deepPujaHavan', label: 'દીપ પૂજા / હવન (સાપ્તાહિક)', showInputs: false },
    { name: 'jholaPustakalay', label: 'ઝોલા પુસ્તકાલય', showInputs: false },
    { name: 'annDaan', label: 'અન્નદાન', showInputs: false },
    { name: 'mahilaAshram', label: 'મહિલા આશ્રમ', showInputs: false },
    { name: 'familyLegalCounseling', label: 'પરિવાર / કાનૂની પરામર્શ કેન્દ્ર (કાઉન્સેલિંગ)', showInputs: false },
    { name: 'antyaSanskarCenter', label: 'અંતિમ સંસ્કાર કેન્દ્ર/શવ વાહન', showInputs: false },
    { name: 'orphanageforold', label: 'અનાથાલય', showInputs: false },
    { name: 'library', label: 'વાંચનાલય / પુસ્તકાલય', showInputs: false },
    { name: 'nursery', label: 'ઝૂલા ઘર / શિશુ પાલન કેન્દ્ર', showInputs: false },
    { name: 'elderlyService', label: 'વૃદ્ધજન સેવા', showInputs: false },
    { name: 'oldAgeHome', label: 'વૃદ્ધાશ્રમ', showInputs: false },
    { name: 'juvenileCenterWork', label: 'કારાવાસ, બાલ સુધાર કેન્દ્રોમાં ચાલતા કામ', showInputs: false },
    { name: 'humanMilkBank', label: 'માનવી દૂધ કોષ', showInputs: false },
    { name: 'womenEmpowerment', label: 'અન્ય (મહિલા સશક્તિકરણ)', showInputs: false }
  ];
  customShiksha:any = [];
  customAayogya:any = [];
  customSawval:any = [];
  customSamajik:any = [];

  othersShiksha = { name: '', men: '', women: '', others: '' };
  othersAayogya = { name: '', men: '', women: '', others: '' };
  othersSawval = { name: '', men: '', women: '', others: '' };
  othersSamajik = { name: '', men: '', women: '', others: '' };


  checkedItems: any = {
    sanskarKendra: { men: '', women: '', others: '' },
    tuitionCenter: { men: '', women: '', others: '' },
    higherEducationCoaching: { men: '', women: '', others: '' },
    studyCenter: { men: '', women: '', others: '' },
    balwadi: { men: '', women: '', others: '' },
    primarySchool: { men: '', women: '', others: '' },
    secondarySchool: { men: '', women: '', others: '' },
    highSchool: { men: '', women: '', others: '' },
    competitiveExamCoaching: { men: '', women: '', others: '' },
    mobileLaboratory: { men: '', women: '', others: '' },
    bookBank: { men: '', women: '', others: '' },
    residentialSchool: { men: '', women: '', others: '' },
    hindiTeachingClass: { men: '', women: '', others: '' },
    adultEducation: { men: '', women: '', others: '' },
    schoolForDisabled: { men: '', women: '', others: '' },
    hostel: { men: '', women: '', others: '' },
    orphanage: { men: '', women: '', others: '' },
    singleTeacherSchool: { men: '', women: '', others: '' },
    ruralHealthGuard: { men: '', women: '', others: '' },
    healthAwarenessCenter: { men: '', women: '', others: '' },
    mobileDispensary: { men: '', women: '', others: '' },
    smallOPD: { men: '', women: '', others: '' },
    divyangCamp: { men: '', women: '', others: '' },
    largeHospital: { men: '', women: '', others: '' },
    naturopathyCenter: { men: '', women: '', others: '' },
    patientAssistance: { men: '', women: '', others: '' },
    therapy: { men: '', women: '', others: '' },
    bloodBank: { men: '', women: '', others: '' },
    ambulanceService: { men: '', women: '', others: '' },
    disabledServiceCenter: { men: '', women: '', others: '' },
    hospital: { men: '', women: '', others: '' },
    eyeBank: { men: '', women: '', others: '' },
    leprosyService: { men: '', women: '', others: '' },
    yogaEducationCenter: { men: '', women: '', others: '' },
    medicineCenter: { men: '', women: '', others: '' },
    deAddictionCenter: { men: '', women: '', others: '' },
    bhajanMandali: { men: '', women: '', others: '' },
    kishoriVikasKendra: { men: '', women: '', others: '' },
    matrushayaOrphanage: { men: '', women: '', others: '' },
    matruMandali: { men: '', women: '', others: '' },
    deepPujaHavan: { men: '', women: '', others: '' },
    jholaPustakalay: { men: '', women: '', others: '' },
    annDaan: { men: '', women: '', others: '' },
    mahilaAshram: { men: '', women: '', others: '' },
    familyLegalCounseling: { men: '', women: '', others: '' },
    antyaSanskarCenter: { men: '', women: '', others: '' },
    orphanageforold: { men: '', women: '', others: '' },
    library: { men: '', women: '', others: '' },
    nursery: { men: '', women: '', others: '' },
    elderlyService: { men: '', women: '', others: '' },
    oldAgeHome: { men: '', women: '', others: '' },
    juvenileCenterWork: { men: '', women: '', others: '' },
    humanMilkBank: { men: '', women: '', others: '' },
    womenEmpowerment: { men: '', women: '', others: '' },
    selfHelpGroup: { men: '', women: '', others: '' },
    sewingCenter: { men: '', women: '', others: '' },
    beautyTrainingCenter: { men: '', women: '', others: '' },
    healthNurseTraining: { men: '', women: '', others: '' },
    computerTraining: { men: '', women: '', others: '' },
    examCoaching: { men: '', women: '', others: '' },
    panchgavyaTraining: { men: '', women: '', others: '' },
    cottageIndustryTraining: { men: '', women: '', others: '' },
    handicrafts: { men: '', women: '', others: '' },
    selfEmploymentCenter1: { men: '', women: '', others: '' },
    decorationFoodProduction: { men: '', women: '', others: '' },
    selfEmploymentCenter2: { men: '', women: '', others: '' },
    repairFitting: { men: '', women: '', others: '' },
    businessSkillTraining: { men: '', women: '', others: '' },
    villageIndustry: { men: '', women: '', others: '' },
    forestMedicineTraining: { men: '', women: '', others: '' },
    foodProcessingTraining: { men: '', women: '', others: '' },
    seedBank: { men: '', women: '', others: '' }

  };
  toggleList(category: number) {
    this.activeCategory = category;
  }
  toggleSubList(item: any) {
    item.showInputs = !item.showInputs;
  }
  isFilled(item: any): boolean {
    return (this.checkedItems[item.name]?.men || 
            this.checkedItems[item.name]?.women || 
            this.checkedItems[item.name]?.others) != null;
  }
  isOthersFilled(category: string): any {
    if (category === 'shiksha') return this.othersShiksha.men || this.othersShiksha.women || this.othersShiksha.others;
    if (category === 'aayogya') return this.othersAayogya.men || this.othersAayogya.women || this.othersAayogya.others;
    if (category === 'sawval') return this.othersSawval.men || this.othersSawval.women || this.othersSawval.others;
    if (category === 'samajik') return this.othersSamajik.men || this.othersSamajik.women || this.othersSamajik.others;
    return false;
  }

  toggleOthersSubList(type: string) {
    if (type === 'shiksha') {
      this.showOthersShiksha = !this.showOthersShiksha;
    } else if (type === 'aayogya') {
      this.showOthersAayogya = !this.showOthersAayogya;
    } else if (type === 'sawval') {
      this.showOthersSawval = !this.showOthersSawval;
    } else if (type === 'samajik') {
      this.showOthersSamajik = !this.showOthersSamajik;
    }
  }
  
  addCustomSubLabel(type: string) {
    if (type === 'shiksha') {
      this.customShiksha.push({ name: '', men: '', women: '', others: '' });
    } else if (type === 'aayogya') {
      this.customAayogya.push({ name: '', men: '', women: '', others: '' });
    }else if (type === 'sawval') {
      this.customSawval.push({ name: '', men: '', women: '', others: '' });
    }else if (type === 'samajik') {
      this.customSawval.push({ name: '', men: '', women: '', others: '' });
    }
  }

  onSubmit(form: any) {
    const shiksha: any = {};
    const aayogya: any = {};
    const swavalamban:any={};
    const samajik:any={};

    this.educationItems.forEach(item => {
      const checked = this.checkedItems[item.name];
      shiksha[item.name] = {
        men: checked.men || 0,
        women: checked.women || 0,
        others: checked.others || 0
      };
      item.showInputs = false;
    });
  

    this.healthItems.forEach(item => {
      const checked = this.checkedItems[item.name];
      aayogya[item.name] = {
        men: checked.men || 0,
        women: checked.women || 0,
        others: checked.others || 0
      };
      item.showInputs = false;
    });
  

    this.swavalambanItems.forEach((item)=>{
     const checked = this.checkedItems[item.name];
     swavalamban[item.name]={
      men: checked.men || 0,
      women: checked.women || 0,
      others: checked.others || 0
     }
     item.showInputs = false;
    })

    this.socialItems.forEach((item)=>{
      const checked = this.checkedItems[item.name];
      samajik[item.name]={
       men: checked.men || 0,
       women: checked.women || 0,
       others: checked.others || 0
      }
      item.showInputs = false;
     })

     shiksha[this.customShiksha.name] = {
      men: this.customShiksha.men,
      women: this.customShiksha.women,
      others: this.customShiksha.others
    };
    
    aayogya[this.customAayogya.name] = {
      men: this.customAayogya.men,
      women: this.customAayogya.women,
      others: this.customAayogya.others
    };
    
    swavalamban[this.customSawval.name] = {
      men: this.customSawval.men,
      women: this.customSawval.women,
      others: this.customSawval.others
    };
    samajik[this.customSamajik.name] = {
      men: this.customSamajik.men,
      women: this.customSamajik.women,
      others: this.customSamajik.others}
  
    console.log({ shiksha, aayogya,swavalamban,samajik });

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
