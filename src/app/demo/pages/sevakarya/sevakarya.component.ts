import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { SharedModule } from '../../../theme/shared/shared.module';
import { ApiService } from 'src/app/services/api.service';
import { valueSelect } from 'src/app/services/valueSelect.service';
import { SnackbarComponent } from 'src/app/theme/shared/components/notification/snackbar.component';

@Component({
  selector: 'app-sevakarya',
  standalone: true,
  imports: [CardComponent, CommonModule, ReactiveFormsModule, FormsModule, SharedModule, SnackbarComponent],
  templateUrl: './sevakarya.component.html',
  styleUrl: './sevakarya.component.scss'
})
export class SevakaryaComponent implements OnInit {
  snackbarColour: string = '';
  msg: any = '';
  showSnackBar: boolean = false;
  dynamicForm: any;
  data = {};
  selectedYear: any = '';
  selectedMonth: any = '';
  isCollapsed = true;
  multiCollapsed1 = true;
  multiCollapsed2 = true;
  loremText = 'test';
  keys = [
    {
      category: 'shiksha',
      subcategories: [
        {
          label: 'સંસ્કાર કેન્દ્ર / બાળ ગોકુલમ',
          name: 'sanskarKendra',
          showInputs: true
        },
        {
          label: 'પાઠદાન કેન્દ્ર / ટ્યુશન કેન્દ્ર',
          name: 'tuitionCenter',
          showInputs: true
        },
        {
          label: 'ઉચ્ચ શિક્ષણ કોચિંગ',
          name: 'higherEducationCoaching',
          showInputs: true
        },
        { label: 'અભ્યાસિકા', name: 'studyCenter', showInputs: true },
        { label: 'બાલવાડી', name: 'balwadi', showInputs: true },
        {
          label: 'પ્રાથમિક શાળા (કક્ષા 5 સુધી)',
          name: 'primarySchool',
          showInputs: true
        },
        {
          label: 'માધ્યમિક શાળા (કક્ષા 8 સુધી)',
          name: 'secondarySchool',
          showInputs: true
        },
        { label: 'હાઇસ્કૂલ', name: 'highSchool', showInputs: true },
        {
          label: 'સ્પર્ધાત્મક પરીક્ષા કોચિંગ (ઉચ્ચ શિક્ષણ માટે)',
          name: 'competitiveExamCoaching',
          showInputs: true
        },
        {
          label: 'ચલિત પ્રયોગશાળા',
          name: 'mobileLaboratory',
          showInputs: true
        },
        { label: 'પુસ્તક પેટી બેંક', name: 'bookBank', showInputs: true },
        {
          label: 'નિર્વાહક શાળા / ગુરુકુલ',
          name: 'residentialSchool',
          showInputs: true
        },
        {
          label: 'હિન્દી શિક્ષણ વર્ગ',
          name: 'hindiTeachingClass',
          showInputs: true
        },
        {
          label: 'પ્રૌઢ શિક્ષણ / સાક્ષરતા કાર્યક્રમ',
          name: 'adultEducation',
          showInputs: true
        },
        {
          label: 'દિવ્યાંગો માટે શાળા',
          name: 'schoolForDisabled',
          showInputs: true
        },
        { label: 'છાત્રાલય', name: 'hostel', showInputs: true },
        {
          label: 'નિરાશ્રિત બાળક-બાળિકા સદન',
          name: 'orphanage',
          showInputs: true
        },
        {
          label: 'એકલ વિદ્યાાલય',
          name: 'singleTeacherSchool',
          showInputs: true
        }
      ]
    },
    {
      category: 'aayogya',
      subcategories: [
        {
          label: 'ગ્રામીણ આરોગ્ય રક્ષક / મિત્ર, પેટિકા',
          name: 'ruralHealthGuard',
          showInputs: true
        },
        {
          label: 'આરોગ્ય જાગૃતિ કેન્દ્ર',
          name: 'healthAwarenessCenter',
          showInputs: true
        },
        {
          label: 'ચલિત દવાખાનું (Mobile Dispensary)',
          name: 'mobileDispensary',
          showInputs: true
        },
        {
          label: 'સ્થિર દવાખાનું (O.P.D.) નાનું',
          name: 'smallOPD',
          showInputs: true
        },
        {
          label: 'દિવ્યાંગ શિબિર/સાધન વિતરણ',
          name: 'divyangCamp',
          showInputs: true
        },
        {
          label: 'સ્થિર દવાખાનું (રહેવાનું) / હોસ્પિટલ (મોટું)',
          name: 'largeHospital',
          showInputs: true
        },
        {
          label: 'પ્રાકૃતિક ચિકિત્સા કેન્દ્ર',
          name: 'naturopathyCenter',
          showInputs: true
        },
        { label: 'રોગી સહાયતા', name: 'patientAssistance', showInputs: true },
        {
          label: 'ન્યુરોथेરીપી, ફિઝિયોથેરીપી, યોગ થેરાપી',
          name: 'therapy',
          showInputs: true
        },
        { label: 'રક્ત કોષ / બ્લડ બેંક', name: 'bloodBank', showInputs: true },
        {
          label: 'રોગી વાહન સેવા',
          name: 'ambulanceService',
          showInputs: true
        },
        {
          label: 'દિવ્યાંગ સેવા કેન્દ્ર',
          name: 'disabledServiceCenter',
          showInputs: true
        },
        { label: 'દવાખાણું', name: 'hospital', showInputs: true },
        { label: 'નેત્ર બેંક', name: 'eyeBank', showInputs: true },
        { label: 'કુષ્ટ રોગી સેવા', name: 'leprosyService', showInputs: true },
        {
          label: 'યોગ શિક્ષણ કેન્દ્ર',
          name: 'yogaEducationCenter',
          showInputs: true
        },
        { label: 'ઔષધિ કેન્દ્ર', name: 'medicineCenter', showInputs: true },
        {
          label: 'નશા મુક્તિ કેન્દ્ર',
          name: 'deAddictionCenter',
          showInputs: true
        }
      ]
    },
    {
      category: 'swavalamban',
      subcategories: [
        {
          label: 'સ્વયં સહાયતા જૂથ વૈભવ શ્રી',
          name: 'selfHelpGroup',
          showInputs: true
        },
        { label: 'સિલાઈ કેન્દ્ર', name: 'sewingCenter', showInputs: true },
        {
          label: 'સૌંદર્ય તાલીમ કેન્દ્ર',
          name: 'beautyTrainingCenter',
          showInputs: true
        },
        {
          label: 'હેલ્થ નર્સ ટ્રેનિંગ, હોમ નર્સિંગ',
          name: 'healthNurseTraining',
          showInputs: true
        },
        {
          label: 'કમ્પ્યુટર તાલીમ',
          name: 'computerTraining',
          showInputs: true
        },
        {
          label: 'સ્પર્ધાત્મક પરીક્ષા કોચિંગ (રોજગાર માટે)',
          name: 'examCoaching',
          showInputs: true
        },
        {
          label: 'ગૌ ઉત્પાદન, પંચગવ્ય ઉત્પાદન તાલીમ',
          name: 'panchgavyaTraining',
          showInputs: true
        },
        {
          label: 'કુટીર ઉદ્યોગ તાલીમ',
          name: 'cottageIndustryTraining',
          showInputs: true
        },
        { label: 'હસ્તકલા', name: 'handicrafts', showInputs: true },
        {
          label: 'સ્વરોજગાર કેન્દ્ર - 1- રાખી, ઇલેક્ટ્રિક લડીઓ, દીપક',
          name: 'selfEmploymentCenter1',
          showInputs: true
        },
        {
          label: 'સજાવટ, ખાદ્ય સામગ્રી વગેરે ઉત્પાદન',
          name: 'decorationFoodProduction',
          showInputs: true
        },
        {
          label: 'સ્વરોજગાર કેન્દ્ર- 2- ઇલેક્ટ્રિક, નળ',
          name: 'selfEmploymentCenter2',
          showInputs: true
        },
        {
          label: 'રિપેરીંગ અને ફિટિંગ',
          name: 'repairFitting',
          showInputs: true
        },
        {
          label: 'વ્યવસાય અને કુશળ તાલીમ',
          name: 'businessSkillTraining',
          showInputs: true
        },
        { label: 'ગામ ઉદ્યોગ', name: 'villageIndustry', showInputs: true },
        {
          label: 'વન ઔષધી આધારિત ઉત્પાદન તાલીમ',
          name: 'forestMedicineTraining',
          showInputs: true
        },
        {
          label: 'અન્ન અને ફળ પ્રક્રિયા તાલીમ',
          name: 'foodProcessingTraining',
          showInputs: true
        },
        { label: 'બીજ કોષ', name: 'seedBank', showInputs: true }
      ]
    },
    {
      category: 'samajik',
      subcategories: [
        { name: 'bhajanMandali', label: 'ભજન મંડળી', showInputs: true },
        {
          name: 'kishoriVikasKendra',
          label: 'કિશોરી વિકાસ કેન્દ્ર',
          showInputs: true
        },
        {
          name: 'matrushayaOrphanage',
          label: 'માતૃછાયા / અનાથ શિશુ ગૃહ',
          showInputs: true
        },
        { name: 'matruMandali', label: 'માતૃ મંડળી', showInputs: true },
        {
          name: 'deepPujaHavan',
          label: 'દીપ પૂજા / હવન (સાપ્તાહિક)',
          showInputs: true
        },
        { name: 'jholaPustakalay', label: 'ઝોલા પુસ્તકાલય', showInputs: true },
        { name: 'annDaan', label: 'અન્નદાન', showInputs: true },
        { name: 'mahilaAshram', label: 'મહિલા આશ્રમ', showInputs: true },
        {
          name: 'familyLegalCounseling',
          label: 'પરિવાર / કાનૂની પરામર્શ કેન્દ્ર (કાઉન્સેલિંગ)',
          showInputs: true
        },
        {
          name: 'antyaSanskarCenter',
          label: 'અંતિમ સંસ્કાર કેન્દ્ર/શવ વાહન',
          showInputs: true
        },
        { name: 'orphanageforold', label: 'અનાથાલય', showInputs: true },
        { name: 'library', label: 'વાંચનાલય / પુસ્તકાલય', showInputs: true },
        {
          name: 'nursery',
          label: 'ઝૂલા ઘર / શિશુ પાલન કેન્દ્ર',
          showInputs: true
        },
        { name: 'elderlyService', label: 'વૃદ્ધજન સેવા', showInputs: true },
        { name: 'oldAgeHome', label: 'વૃદ્ધાશ્રમ', showInputs: true },
        {
          name: 'juvenileCenterWork',
          label: 'કારાવાસ, બાલ સુધાર કેન્દ્રોમાં ચાલતા કામ',
          showInputs: true
        },
        { name: 'humanMilkBank', label: 'માનવી દૂધ કોષ', showInputs: true },
        {
          name: 'womenEmpowerment',
          label: 'અન્ય (મહિલા સશક્તિકરણ)',
          showInputs: true
        }
      ]
    }
  ];
  showCategories: { [key: string]: boolean } = {};
  showSubcategories: { [key: string]: { [key: string]: boolean } } = {};
  userData: any;
  selectedVasti: any;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private valSelService: valueSelect
  ) {}

  ngOnInit(): void {
    this.valSelService.manageBreadCrumb(true);
    this.valSelService.manageShakhaVrutFlag(false);
    this.dynamicForm = this.generateForm(this.keys);

    this.keys.forEach((item) => {
      this.showCategories[item.category] = false;
      this.showSubcategories[item.category] = {};
      item.subcategories.forEach((subcategory) => {
        this.showSubcategories[item.category][subcategory.name] = false;
      });
    });
    if (this.selectedYear != '') {
      this.getData();
    }
    this.userData = this.valSelService.getUserData();
    this.valSelService.getCurrentVasti().subscribe((res) => {
      this.selectedVasti = res;
    });
    //this.setFormData(this.data);
  }
  getData() {
    this.apiService.getData(`api/getSevaKarya/${this.selectedVasti}/${this.selectedYear}`).subscribe((res: any) => {
      this.setFormData(res[0]);
    });
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
            others: [0]
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
    this.showSubcategories[category][subcategory] = !this.showSubcategories[category][subcategory];
  }

  // On form submit
  onSubmit(): void {
    let a;
    this.valSelService.getCurrentVasti().subscribe((res) => {
      a = res;
    });
    console.log('Form Value:', this.dynamicForm.value);
    const obj = {
      sevaVastiId: this.selectedVasti,
      jillaId: this.userData.jilla.jillaId,
      talukaId: this.userData.taluka.talukaId,
      vibhagId: this.userData.vibhag.vibhagId,
      prant: this.userData.prant,
      year: this.selectedYear,
      ...this.dynamicForm.value
    };

    this.apiService.postData('api/sevaKarya', obj, { responseType: 'text' }).subscribe(
      (res: any) => {
        this.showSnackBar = true;
        this.snackbarColour = 'success';
        this.msg = 'સફળતાપૂર્વક સેવાકાર્ય વૃત સબમિટ થઈ ગયું છે.';
      },
      (err) => {
        this.showSnackBar = true;
        this.snackbarColour = 'error';
        this.msg = 'ફરી  પ્રયત્ન કરો અથવા એડમીન ને સંપર્ક કરો.';
      }
    );
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
  manageYear(event: any) {
    this.dynamicForm.reset();
    this.selectedYear = event.target.value;
    this.getData();
  }

  // Set form data from API response
  setFormData(data: any): void {
    this.dynamicForm.patchValue(data);
  }
}
