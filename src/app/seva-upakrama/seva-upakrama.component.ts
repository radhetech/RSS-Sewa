import { Component } from '@angular/core';
import { valueSelect } from '../services/valueSelect.service';
import { ApiService } from '../services/api.service';

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
  showList1:boolean = false;
  showList2:boolean = false;
  showList3:boolean = false;
  showList4:boolean = false;
  showError: boolean = false;
  snackbarColour: string | null = null;
  loginerr: string | null = null;
  showOthersShiksha: boolean = false;
  showOthersAayogya: boolean = false;
  showOthersSawval: boolean = false;
  showOthersSamajik:Boolean= false;
  activeCategory: number = 0;
  selectedNagar: any;
  ShowNagar: boolean = true;
  selectedDate: string | null = null;
  userData:any;
  vrutVasti:string = '';
  vrutShakha:string = '';
  formId:string = '';
  constructor(private valueSel:valueSelect, private _apiService:ApiService) {
    this.userData = this.valueSel.getUserData()!;
  }



  educationItems = [
    { label: 'શૈક્ષણિક સામગ્રીનું વિતરણ', name: 'educationMaterialDistribution', showInputs: false, men: null, women: null, others: null },
    { label: 'પરીક્ષા માર્ગદર્શન શિબિર', name: 'examGuidanceCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'ફી સહાય', name: 'feeAssistance', showInputs: false, men: null, women: null, others: null },
    { label: 'વ્યક્તિત્વ વિકાસ શિબિર', name: 'personalityDevelopmentCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'અન્ય પ્રવૃત્તિ', name: 'otherActivity1', showInputs: false, men: null, women: null, others: null }
  ];

  healthItems = [
    { label: 'રક્તદાન શિબિર', name: 'bloodDonationCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'આરોગ્ય શિબિર', name: 'healthCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'આંખ તપાસ કેમ્પ', name: 'eyeCheckupCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'યોગ શિબિર', name: 'yogaCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'દિવ્યાંગ શિબિર/સાધન વિતરણ', name: 'divyangCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'રક્તદાતા જૂથ યાદી', name: 'bloodDonorList', showInputs: false, men: null, women: null, others: null },
    { label: 'પ્રાથમિક સહાય તાલીમ', name: 'firstAidTraining', showInputs: false, men: null, women: null, others: null },
    { label: 'સોંપણી(કાઉન્સેલિંગ)', name: 'counseling', showInputs: false, men: null, women: null, others: null },
    { label: 'વ્યસન મુક્તિ શિબિર', name: 'deAddictionCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'અન્ય પ્રવૃત્તિ', name: 'otherActivity2', showInputs: false, men: null, women: null, others: null }
  ];
  selfRelianceItems = [
    { label: 'વ્યવસાય તાલીમ શિબિર', name: 'professionalTrainingCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'પંચગવ્ય નિર્માણ શિબિર', name: 'panchgavyaTrainingCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'રાખડી બનાવવી', name: 'rakdiMaking', showInputs: false, men: null, women: null, others: null },
    { label: 'ઇલેક્ટ્રિક માળા બનાવવી', name: 'electricMalaConstruction', showInputs: false, men: null, women: null, others: null },
    { label: 'સુશોભન સામગ્રીનું ઉત્પાદન', name: 'decorativeMaterialProduction', showInputs: false, men: null, women: null, others: null },
    { label: 'દિવાળીના દીવા બનાવવા', name: 'diwaliLampMaking', showInputs: false, men: null, women: null, others: null },
    { label: 'મીઠાઈઓ અને નાસ્તાનું ઉત્પાદન', name: 'sweetsAndSnacksProduction', showInputs: false, men: null, women: null, others: null },
    { label: 'કારભારી તાલીમ', name: 'managerialTraining', showInputs: false, men: null, women: null, others: null },
    { label: 'કાર્બનિક ખાતર ઉત્પાદન તાલીમ', name: 'organicFertilizerTraining', showInputs: false, men: null, women: null, others: null },
    { label: 'અન્ય પ્રવૃત્તિ', name: 'otherActivity3', showInputs: false, men: null, women: null, others: null }
  ];
  socialItems = [
    { label: 'કન્યા પૂજા', name: 'girlWorship', showInputs: false, men: null, women: null, others: null },
    { label: 'સમૂહ લગ્ન', name: 'massMarriage', showInputs: false, men: null, women: null, others: null },
    { label: 'મંદિરની સ્વચ્છતા', name: 'templeCleanliness', showInputs: false, men: null, women: null, others: null },
    { label: 'જાહેર સ્વચ્છતા', name: 'publicCleanliness', showInputs: false, men: null, women: null, others: null },
    { label: 'જળ સંરક્ષણ તળાવનું બાંધકામ', name: 'waterConservationPondConstruction', showInputs: false, men: null, women: null, others: null },
    { label: 'રોડ બાંધકામ', name: 'roadConstruction', showInputs: false, men: null, women: null, others: null },
    { label: 'સામૂહિક ઉજવણી', name: 'communityCelebration', showInputs: false, men: null, women: null, others: null },
    { label: 'રોપા વિતરણ/વૃક્ષ રોપણી', name: 'treePlantation', showInputs: false, men: null, women: null, others: null },
    { label: 'રમતગમત સ્પર્ધા', name: 'sportsCompetition', showInputs: false, men: null, women: null, others: null },
    { label: 'બ્લેન્કેટ સ્વેટર વગેરેની ડિલિવરી', name: 'blanketSweaterDelivery', showInputs: false, men: null, women: null, others: null },
    { label: 'ખોરાક દાન/નાસ્તો વગેરેનું વિતરણ.', name: 'foodDonation', showInputs: false, men: null, women: null, others: null },
    { label: 'અન્ય પ્રવૃત્તિ', name: 'otherActivity4', showInputs: false, men: null, women: null, others: null }
  ];


      
  checkedItems: any = {
    educationMaterialDistribution: { men: '', women: '', others: '',images:[],chooseDate:'' },
    examGuidanceCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    feeAssistance: { men: '', women: '', others: '',images:[],chooseDate:'' },
    personalityDevelopmentCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    bloodDonationCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    healthCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    eyeCheckupCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    yogaCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    divyangCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    bloodDonorList: { men: '', women: '', others: '',images:[],chooseDate:'' },
    firstAidTraining: { men: '', women: '', others: '',images:[],chooseDate:'' },
    counseling: { men: '', women: '', others: '',images:[],chooseDate:'' },
    deAddictionCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    professionalTrainingCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    panchgavyaTrainingCamp: { men: '', women: '', others: '',images:[],chooseDate:'' },
    rakdiMaking: { men: '', women: '', others: '',images:[],chooseDate:'' },
    electricMalaConstruction: { men: '', women: '', others: '',images:[],chooseDate:'' },
    decorativeMaterialProduction: { men: '', women: '', others: '',images:[],chooseDate:'' },
    diwaliLampMaking: { men: '', women: '', others: '',images:[],chooseDate:'' },
    sweetsAndSnacksProduction: { men: '', women: '', others: '',images:[],chooseDate:'' },
    managerialTraining: { men: '', women: '', others: '',images:[],chooseDate:'' },
    organicFertilizerTraining: { men: '', women: '', others: '',images:[],chooseDate:'' },
    girlWorship: { men: '', women: '', others: '',images:[],chooseDate:'' },
    massMarriage: { men: '', women: '', others: '',images:[],chooseDate:'' },
    templeCleanliness: { men: '', women: '', others: '',images:[],chooseDate:'' },
    publicCleanliness: { men: '', women: '', others: '',images:[],chooseDate:'' },
    waterConservationPondConstruction: { men: '', women: '', others: '',images:[],chooseDate:'' },
    roadConstruction: { men: '', women: '', others: '',images:[],chooseDate:'' },
    communityCelebration: { men: '', women: '', others: '',images:[],chooseDate:'' },
    treePlantation: { men: '', women: '', others: '',images:[],chooseDate:'' },
    sportsCompetition: { men: '', women: '', others: '',images:[],chooseDate:'' },
    blanketSweaterDelivery: { men: '', women: '', others: '',images:[],chooseDate:'' },
    foodDonation: { men: '', women: '', others: '',images:[],chooseDate:'' },
    otherActivity1: { men: '', women: '', others: '',images:[],chooseDate:'' },
    otherActivity2: { men: '', women: '', others: '',images:[],chooseDate:'' },
    otherActivity3: { men: '', women: '', others: '',images:[],chooseDate:'' },
    otherActivity4: { men: '', women: '', others: '',images:[],chooseDate:'' }
  };


  ngOnInit() {
  
      this.selectedNagar = '';
      this.ShowNagar = !this.selectedNagar;  
  }

  toggleList(category: any) {
    this.activeCategory = this.activeCategory === category ? null : category;
  }
  toggleSubList(item: any, itemList: any[]) {
    itemList.forEach(i => i.showInputs = false);
    item.showInputs = !item.showInputs;
  }
  isFilled(item: any) {
    return (this.checkedItems[item.name]?.men || 
            this.checkedItems[item.name]?.women || 
            this.checkedItems[item.name]?.others)  }

  onFileChange(event: any, itemName: string) {
    const files = event.target.files;
    if (files.length + this.checkedItems[itemName].images.length <= 2) {
      for (let i = 0; i < files.length; i++) {
        this.checkedItems[itemName].images.push(files[i]);
      }
    } else {
      alert('તમે વધુમાં વધુ 2 ઈમેજ જ અપલોડ કરી શકો છો.');
    }
    event.target.value = ''; 
  }

  removeImage(itemName: string, index: number) {
    this.checkedItems[itemName].images.splice(index, 1);
  }
  createImageUrl(image: File): string {
    return URL.createObjectURL(image);
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
  onMonthYearChange() {
    if (this.selectedDate) {
    const dateObj = new Date(this.selectedDate);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const firstDay = new Date(year, (month+1), 1).toISOString().split('T')[0];
    const lastDay = new Date(year, (month+1) + 1, 0).toISOString().split('T')[0]; 

    this.educationItems.forEach(item => {
        this.checkedItems[item.name].minDate = firstDay;
        this.checkedItems[item.name].maxDate = lastDay;
    });
    this.healthItems.forEach(item => {
      this.checkedItems[item.name].minDate = firstDay;
      this.checkedItems[item.name].maxDate = lastDay;
  });
  this.selfRelianceItems.forEach(item => {
    this.checkedItems[item.name].minDate = firstDay;
    this.checkedItems[item.name].maxDate = lastDay;
});
this.socialItems.forEach(item => {
  this.checkedItems[item.name].minDate = firstDay;
  this.checkedItems[item.name].maxDate = lastDay;
});
  }
 
}


  onSubmit(form: any) {
     const shiksha: any = {};
    const aayogya: any = {};
    const swavalamban:any={};
    const samajik:any={};
    form.value.vrutPrant = this.userData.prant;
  form.value.vrutVibhag = this.userData.vibhag;
  form.value.vrutJilla = this.userData.jilla;
  form.value.vrutTaluka = this.userData.taluka;
  form.value.vrutVasti = this.vrutVasti;
  form.value.vrutShakha = this.vrutShakha;
  form.value.selectedDate =this.selectedDate ;

    this.educationItems.forEach(item => {
      const checked = this.checkedItems[item.name];
      shiksha[item.name] = {
        men: checked.men || 0,
        women: checked.women || 0,
        others: checked.others || 0,
        choosedate: checked.choosedate ? new Date(checked.choosedate).toLocaleDateString('en-GB') : '',
        images: checked.images.map((image: File) => this.createImageUrl(image))
      };
      if (item.name === 'otherActivity1') {
        shiksha[item.name].activityName = checked.activityName || '';
      }
      item.showInputs = false;
    });
  
    this.healthItems.forEach(item => {
      const checked = this.checkedItems[item.name];
      aayogya[item.name] = {
        men: checked.men || 0,
        women: checked.women || 0,
        others: checked.others || 0,
        choosedate: checked.choosedate ? new Date(checked.choosedate).toLocaleDateString('en-GB') : '',
        images: checked.images.map((image: File) => this.createImageUrl(image))
      };
      if (item.name === 'otherActivity2') {
        aayogya[item.name].activityName = checked.activityName || '';
      }
      item.showInputs = false;
    });
  
    this.selfRelianceItems.forEach((item)=>{
     const checked = this.checkedItems[item.name];
     swavalamban[item.name]={
      men: checked.men || 0,
      women: checked.women || 0,
      others: checked.others || 0,
      choosedate: checked.choosedate ? new Date(checked.choosedate).toLocaleDateString('en-GB') : '',
      images: checked.images.map((image: File) => this.createImageUrl(image))
     }
     if (item.name === 'otherActivity3') {
      swavalamban[item.name].activityName = checked.activityName || '';
    }
     item.showInputs = false;
    })

    this.socialItems.forEach((item)=>{
      const checked = this.checkedItems[item.name];
      samajik[item.name]={
       men: checked.men || 0,
       women: checked.women || 0,
       others: checked.others || 0,
       choosedate: checked.choosedate ? new Date(checked.choosedate).toLocaleDateString('en-GB') : '',
       images: checked.images.map((image: File) => this.createImageUrl(image))
      }
      if (item.name === 'otherActivity4') {
        samajik[item.name].activityName = checked.activityName || '';
      }
      item.showInputs = false;
     })
    //  const submissionData = {  selectedDate: this.selectedDate, shiksha, aayogya, swavalamban, samajik };
       
    // console.log(submissionData);

    this._apiService.postData('http://localhost:4000/sevaUpakramaVrut',form.value).subscribe((res)=>{
        console.log(res)
     })
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
