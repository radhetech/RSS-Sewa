import { Component } from '@angular/core';
import { SelectNagarService } from '../services/selectNagar.service';

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


  constructor(private sharedService: SelectNagarService) {}



  educationItems = [
    { label: 'શૈક્ષણિક સામગ્રીનું વિતરણ', name: 'educationMaterialDistribution', showInputs: false, men: null, women: null, others: null },
    { label: 'પરીક્ષા માર્ગદર્શન શિબિર', name: 'examGuidanceCamp', showInputs: false, men: null, women: null, others: null },
    { label: 'ફી સહાય', name: 'feeAssistance', showInputs: false, men: null, women: null, others: null },
    { label: 'વ્યક્તિત્વ વિકાસ શિબિર', name: 'personalityDevelopmentCamp', showInputs: false, men: null, women: null, others: null }
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
    { label: 'વ્યસન મુક્તિ શિબિર', name: 'deAddictionCamp', showInputs: false, men: null, women: null, others: null }
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
    { label: 'કાર્બનિક ખાતર ઉત્પાદન તાલીમ', name: 'organicFertilizerTraining', showInputs: false, men: null, women: null, others: null }
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
    { label: 'ખોરાક દાન/નાસ્તો વગેરેનું વિતરણ.', name: 'foodDonation', showInputs: false, men: null, women: null, others: null }
  ];

  customShiksha:any = [];
  customAayogya:any = [];
  customSawval:any = [];
  customSamajik:any = [];

  othersShiksha = { name: '', men: '', women: '', others: '' };
  othersAayogya ={ name: '', men: '', women: '', others: '' };
  othersSawval = { name: '', men: '', women: '', others: '' };
  othersSamajik = { name: '', men: '', women: '', others: '' };  
      
  checkedItems: any = {
    educationMaterialDistribution: { men: '', women: '', others: '' },
    examGuidanceCamp: { men: '', women: '', others: '' },
    feeAssistance: { men: '', women: '', others: '' },
    personalityDevelopmentCamp: { men: '', women: '', others: '' },
    bloodDonationCamp: { men: '', women: '', others: '' },
    healthCamp: { men: '', women: '', others: '' },
    eyeCheckupCamp: { men: '', women: '', others: '' },
    yogaCamp: { men: '', women: '', others: '' },
    divyangCamp: { men: '', women: '', others: '' },
    bloodDonorList: { men: '', women: '', others: '' },
    firstAidTraining: { men: '', women: '', others: '' },
    counseling: { men: '', women: '', others: '' },
    deAddictionCamp: { men: '', women: '', others: '' },
    professionalTrainingCamp: { men: '', women: '', others: '' },
    panchgavyaTrainingCamp: { men: '', women: '', others: '' },
    rakdiMaking: { men: '', women: '', others: '' },
    electricMalaConstruction: { men: '', women: '', others: '' },
    decorativeMaterialProduction: { men: '', women: '', others: '' },
    diwaliLampMaking: { men: '', women: '', others: '' },
    sweetsAndSnacksProduction: { men: '', women: '', others: '' },
    managerialTraining: { men: '', women: '', others: '' },
    organicFertilizerTraining: { men: '', women: '', others: '' },
    girlWorship: { men: '', women: '', others: '' },
    massMarriage: { men: '', women: '', others: '' },
    templeCleanliness: { men: '', women: '', others: '' },
    publicCleanliness: { men: '', women: '', others: '' },
    waterConservationPondConstruction: { men: '', women: '', others: '' },
    roadConstruction: { men: '', women: '', others: '' },
    communityCelebration: { men: '', women: '', others: '' },
    treePlantation: { men: '', women: '', others: '' },
    sportsCompetition: { men: '', women: '', others: '' },
    blanketSweaterDelivery: { men: '', women: '', others: '' },
    foodDonation: { men: '', women: '', others: '' }
  };


  ngOnInit() {
    this.sharedService.currentNagar.subscribe(nagar => {
      this.selectedNagar = nagar;
      this.ShowNagar = !this.selectedNagar;
      console.log('Selected nagar in another component:', this.selectedNagar);
   
    });
  }

  openSelectNagar() {
    this.ShowNagar = true;
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
  

    this.selfRelianceItems.forEach((item)=>{
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
