import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { valueSelect } from '../../../services/valueSelect.service';
import { CardComponent } from "../../../theme/shared/components/card/card.component";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SnackbarComponent } from 'src/app/theme/shared/components/notification/snackbar.component';

@Component({
  selector: 'app-sevaupkram',
  standalone: true,
  imports: [CardComponent,CommonModule,ReactiveFormsModule,FormsModule,SharedModule,SnackbarComponent],
  templateUrl: './sevaupkram.component.html',
  styleUrl: './sevaupkram.component.scss'
})
export class SevaupkramComponent implements OnInit {
  snackbarColour:string = ''
  msg:any= '';
  showSnackBar:boolean=false;
  dynamicForm: any;
  data = {};
  selectedYear:any="";
  selectedMonth:any="";
  isCollapsed = true;
  multiCollapsed1 = true;
  multiCollapsed2 = true;
  loremText ="test"
      keys = [
    {
      category: 'shiksha',
      subcategories: [
        { label: 'શૈક્ષણિક સામગ્રીનું વિતરણ', name: 'educationMaterialDistribution', showInputs: true },
        { label: 'પરીક્ષા માર્ગદર્શન શિબિર', name: 'examGuidanceCamp', showInputs: true },
        { label: 'ફી સહાય', name: 'feeAssistance', showInputs: true },
        { label: 'વ્યક્તિત્વ વિકાસ શિબિર', name: 'personalityDevelopmentCamp', showInputs: true },
        { label: 'અન્ય પ્રવૃત્તિ', name: 'otherActivity1', showInputs: true }
      ]
    },
    {
      category: 'aayogya',
      subcategories: [
        { label: 'રક્તદાન શિબિર', name: 'bloodDonationCamp', showInputs: true },
        { label: 'આરોગ્ય શિબિર', name: 'healthCamp', showInputs: true },
        { label: 'આંખ તપાસ કેમ્પ', name: 'eyeCheckupCamp', showInputs: true },
        { label: 'યોગ શિબિર', name: 'yogaCamp', showInputs: true },
        { label: 'દિવ્યાંગ શિબિર/સાધન વિતરણ', name: 'divyangCamp', showInputs: true },
        { label: 'રક્તદાતા જૂથ યાદી', name: 'bloodDonorList', showInputs: true },
        { label: 'પ્રાથમિક સહાય તાલીમ', name: 'firstAidTraining', showInputs: true },
        { label: 'સોંપણી(કાઉન્સેલિંગ)', name: 'counseling', showInputs: true },
        { label: 'વ્યસન મુક્તિ શિબિર', name: 'deAddictionCamp', showInputs: true },
        { label: 'અન્ય પ્રવૃત્તિ', name: 'otherActivity2', showInputs: true }
      ]
    },
    {
      category: 'swavalamban',
      subcategories: [
        { label: 'વ્યવસાય તાલીમ શિબિર', name: 'professionalTrainingCamp', showInputs: true },
        { label: 'પંચગવ્ય નિર્માણ શિબિર', name: 'panchgavyaTrainingCamp', showInputs: true },
        { label: 'રાખડી બનાવવી', name: 'rakdiMaking', showInputs: true },
        { label: 'ઇલેક્ટ્રિક માળા બનાવવી', name: 'electricMalaConstruction', showInputs: true },
        { label: 'સુશોભન સામગ્રીનું ઉત્પાદન', name: 'decorativeMaterialProduction', showInputs: true },
        { label: 'દિવાળીના દીવા બનાવવા', name: 'diwaliLampMaking', showInputs: true },
        { label: 'મીઠાઈઓ અને નાસ્તાનું ઉત્પાદન', name: 'sweetsAndSnacksProduction', showInputs: true },
        { label: 'કારભારી તાલીમ', name: 'managerialTraining', showInputs: true },
        { label: 'કાર્બનિક ખાતર ઉત્પાદન તાલીમ', name: 'organicFertilizerTraining', showInputs: true },
        { label: 'અન્ય પ્રવૃત્તિ', name: 'otherActivity3', showInputs: true }
      ]
    },
    {
      category: 'samajik',
      subcategories: [
        { label: 'કન્યા પૂજા', name: 'girlWorship', showInputs: true },
        { label: 'સમૂહ લગ્ન', name: 'massMarriage', showInputs: true },
        { label: 'મંદિરની સ્વચ્છતા', name: 'templeCleanliness', showInputs: true },
        { label: 'જાહેર સ્વચ્છતા', name: 'publicCleanliness', showInputs: true },
        { label: 'જળ સંરક્ષણ તળાવનું બાંધકામ', name: 'waterConservationPondConstruction', showInputs: true },
        { label: 'રોડ બાંધકામ', name: 'roadConstruction', showInputs: true },
        { label: 'સામૂહિક ઉજવણી', name: 'communityCelebration', showInputs: true },
        { label: 'રોપા વિતરણ/વૃક્ષ રોપણી', name: 'treePlantation', showInputs: true },
        { label: 'રમતગમત સ્પર્ધા', name: 'sportsCompetition', showInputs: true },
        { label: 'બ્લેન્કેટ સ્વેટર વગેરેની ડિલિવરી', name: 'blanketSweaterDelivery', showInputs: true },
        { label: 'ખોરાક દાન/નાસ્તો વગેરેનું વિતરણ.', name: 'foodDonation', showInputs: true },
        { label: 'અન્ય પ્રવૃત્તિ', name: 'otherActivity4', showInputs: true }
      ]
    },
  ];
  showCategories: { [key: string]: boolean } = {};
  showSubcategories: { [key: string]: { [key: string]: boolean } } = {};
  userData:any;
  selectedVasti:any;
  constructor(private fb: FormBuilder,private apiService: ApiService, private valSelService:valueSelect ) {}

  ngOnInit(): void {
    this.valSelService.manageBreadCrumb(true);
   this.valSelService.manageShakhaVrutFlag(false)
    this.dynamicForm = this.generateForm(this.keys);
    
    this.keys.forEach((item) => {
      this.showCategories[item.category] = false;
      this.showSubcategories[item.category] = {};
      item.subcategories.forEach((subcategory) => {
        this.showSubcategories[item.category][subcategory.name] = false;
      });
    });
   if(this.selectedYear!=''){
      this.getData();
   }
    this.userData = this.valSelService.getUserData();
   this.valSelService.getCurrentVasti().subscribe((res)=>{
      this.selectedVasti = res;
  })
    //this.setFormData(this.data);
  }
  getData(){
    this.apiService.getData(`api/getSevaUpkram/${this.selectedVasti}/${this.selectedMonth}/${this.selectedYear}`).subscribe((res:any)=>{
      this.setFormData(res[0])
     })
  }

  // Generate FormGroup based on modified keys with labels
  generateForm(keys: any[]): FormGroup {
    const group = this.fb.group({});
    keys.forEach((item) => {
      const subGroup = this.fb.group({});
      item.subcategories.forEach((subcategory: any) => {
        subGroup.addControl(
          subcategory.name,
          this.fb.group({
            men: [0],
            women: [0],
            others: [0],
            date:[''],
            images:[[]]
          })
        );
      });
      group.addControl(item.category, subGroup);
    });
    return group;
  }

  // Toggle category visibility
  toggleCategory(category: string): void {
    this.showCategories[category] = !this.showCategories[category];
  }

  // Toggle subcategory visibility
  toggleSubcategory(category: string, subcategory: string): void {
    this.showSubcategories[category][subcategory] =
      !this.showSubcategories[category][subcategory];
  }

  // On form submit
  onSubmit(): void {
    let a;
    this.valSelService.getCurrentVasti().subscribe((res)=>{
        a= res;
    })
    console.log('Form Value:', this.dynamicForm.value);
    const obj = {
      sevaVastiId: this.selectedVasti,
      jillaId: this.userData.jilla.jillaId,
      talukaId: this.userData.taluka.talukaId,
      vibhagId: this.userData.vibhag.vibhagId,
      prant: this.userData.prant,
      year: this.selectedYear,
      month:this.selectedMonth,
      ...this.dynamicForm.value
    }

    this.apiService.postData('api/sevaUpkram',obj,{ responseType: 'text' }).subscribe((res:any)=>{
      this.showSnackBar = true;
      this.snackbarColour = 'success';
      this.msg = 'સફળતાપૂર્વક સેવા ઉપક્રમ વૃત સબમિટ થઈ ગયું છે.';

    },(err)=>{
      this.showSnackBar = true;
      this.snackbarColour = 'error';
      this.msg = 'ફરી  પ્રયત્ન કરો અથવા એડમીન ને સંપર્ક કરો.';
    })
    this.dynamicForm.reset();
    this.snackTimeOut();
    // Call API to submit the data
    // this.apiService.submitData(this.dynamicForm.value).subscribe(...);
  }
  snackTimeOut() {
    setTimeout(() => {
      this.showSnackBar = null;
      console.log(this.showSnackBar);
    }, 3000);
  }
  manageYear(event:any){
    // this.dynamicForm.reset();
    this.selectedYear = event.target.value;
    this.getData();
  }
  manageMonth(event:any){
    // this.dynamicForm.reset();
    this.selectedMonth = event.target.value;
    //this.getData();
  }

  // Set form data from API response
  setFormData(data: any): void {
    this.dynamicForm.patchValue(data);
  }
}


