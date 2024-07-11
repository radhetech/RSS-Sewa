import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {
  form: FormGroup;
  states: any[] = [
    { name: 'બોપલ', cities: [
      { name: 'શ્યામાનંદ', villages: [
        { name: 'રાજીવનગર', sakhas: ['શક્તિ પ્રભાત'] },
        { name: 'વ્રજ નગરી', sakhas: ['કારગીલ પ્રભાત'] },
        { name: 'કૃષ્ણધામ', sakhas: ['આનંદનગર પ્રભાત'] }
      ]},
      { name: 'જોધપુર', villages: [
        { name: 'રામદેવનગર', sakhas: ['રવીરશ્મી પ્રભાત'] },
        { name: 'જોધપુર ગામ', sakhas: ['રામકૃષ્ણ પ્રભાત'] },
        { name: 'ગોપાલ આવાસ', sakhas: ['વિવેકાનંદ પ્રભાત'] },
        { name: 'ગોકુલ આવાસ', sakhas: ['તરુણ વ્યવસાયી મિલન'] },
        { name: 'શ્વેતાંજલી', sakhas: ['પાર્થ પ્રભાત'] },
        { name: 'વિસતનગર', sakhas: ['દિવ્ય જ્યોત'] }
      ]},
      { name: 'બોપલ', villages: [
        { name: 'રણછોડ પુરા', sakhas: ['નંદીશ્વર પ્રભાત'] },
        { name: 'G E B', sakhas: ['માતૃભૂમિ પ્રભાત'] },
        { name: 'બોપલ ગામ', sakhas: ['શ્યામ રાત્રી'] },
        { name: 'મણિપુર ગામ', sakhas: ['ચાણક્ય પ્રભાત'] }
      ]},
      { name: 'દક્ષીણ બોપલ', villages: [
        { name: 'કિષ્ના', sakhas: ['સહજાનંદ પ્રભાત', 'કેશવ પ્રભાત'] },
        { name: 'રામદેવ', sakhas: ['શિવાજી પ્રભાત', 'ઉપવન પ્રભાત'] }
      ]},
      { name: 'શેલા', villages: [
        { name: 'શેલા ગામ', sakhas: ['નાનાજી દેશમુખ  પ્રભાત'] },
        { name: 'શાંતીપુરા', sakhas: ['ગોકુલ ધામ'] },
        { name: 'ઉલ્લારીયા', sakhas: ['વ્રજેશ્વર મિલન'] },
        { name: 'ચાંગોદર', sakhas: ['કેશવ પ્રભાત'] },
        { name: 'મોરૈયા', sakhas: ['વિવેકાનંદ પ્રભાત'] },
        { name: 'નવાપુરા', sakhas: ['સરદાર સાયં'] }
      ]},
      { name: 'સરખેજ', villages: [
        { name: 'રામનાથ', sakhas: ['સિદ્ધનાથ રાત્રી'] },
        { name: 'સરદાર આવાસ - I', sakhas: ['આઝાદ પ્રભાત'] },
        { name: 'સરદાર આવાસ - II', sakhas: ['ઓમકારેશ્વર'] },
        { name: 'શંકરપુરા', sakhas: ['સિદ્ધેસ્વર મિલન'] },
        { name: 'વિસલપુર', sakhas: ['મિલન'] },
        { name: 'બાકરોલ', sakhas: ['બાકરોલ મિલન'] },
        { name: 'કાસિંદ્રા', sakhas: ['મિલન'] }
      ]}
    ]},{
      name: 'ચાંદલોડિયા',
      cities: [
        { name: 'ચાંદલોડિયા', villages: [
          { name: 'ઓમકારેશ્વર', sakhas: ['માધવ પ્રભાત', 'સાયોના પ્રભાત'] },
          { name: 'રામદેવ - ૧', sakhas: ['કેશવ'] },
          { name: 'રામદેવ - ૨', sakhas: ['અર્જુન'] },
          { name: 'સમર્પણ', sakhas: ['સમર્પણ'] },
          { name: 'ભમ્મરિયા', sakhas: ['શિવમ'] },
          { name: 'સરદાર', sakhas: ['સરદાર'] },
          { name: 'સંત રોહીદાસ', sakhas: ['આઝાદ'] }
        ]},
        { name: 'નવા રાણીપ', villages: [
          { name: 'પરમેશ્વર', sakhas: ['અટલ'] },
          { name: 'સરસ્વતી', sakhas: ['વીર સાવરકર'] },
          { name: 'દિગ્વિજય', sakhas: ['તિરુપતિ'] },
          { name: 'પીપળેશ્વર', sakhas: ['શિવાજી'] }
        ]},
        { name: 'વંદે માતરમ', villages: [
          { name: 'ચાણક્ય', sakhas: ['વંદે માતરમ'] },
          { name: 'નવા રણછોડરાય', sakhas: ['સ્વરાજ'] },
          { name: 'જગતપુર', sakhas: ['શ્રીજી'] },
          { name: 'ગૌતમ', sakhas: ['ગૌતમ'] }
        ]},
        { name: 'વૈષ્ણોદેવી', villages: [
          { name: 'ખોડીયાર પરુ', sakhas: ['શાલીગ્રામ'] },
          { name: 'ખોડીયાર રાવળવાસ', sakhas: ['વૈષ્ણોદેવી'] },
          { name: 'છારોડી', sakhas: ['અર્જુન', 'નિર્માણ'] }
        ]},
        { name: 'ભાગવત', villages: [
          { name: 'સોલા ગામ', sakhas: ['પરશુરામ'] },
          { name: 'ભાડજ', sakhas: ['સૂર્યોદય'] },
          { name: 'પાણી ની ટાંકી', sakhas: ['અષ્ટ મંગલ'] },
          { name: 'વિકાસ નગર', sakhas: ['હનુમંત'] },
          { name: 'મહાત્મા નગર', sakhas: [] },
          { name: 'સરદાર', sakhas: [] }
        ]}
      ]
    }, {
      name: 'નારણપુરા',
      cities: [
        { name: 'નારણપુરા', villages: [
          { name: 'ગોપાલ નગર', sakhas: ['જય વિજય'] },
          { name: 'સ્વામિનારાયણ', sakhas: ['ભાવિન'] },
          { name: 'ધરતી વિકાસ', sakhas: ['વિજયનગર'] }
        ]},
        { name: 'સોલા રોડ', villages: [
          { name: 'શિવાલય', sakhas: ['પ્રતીક્ષા'] }
        ]},
        { name: 'રન્ના પાર્ક', villages: [
          { name: 'રામકૃષ્ણ નગર', sakhas: ['કેશવ પ્રભાત'] },
          { name: 'બાબુનગર રેલ્વે', sakhas: ['ઘનશ્યામ પ્રભાત'] },
          { name: 'બાપા સીતારામ', sakhas: ['દેશવાલી'] },
          { name: 'ગોપાલનગર', sakhas: ['સર્વોદય'] }
        ]},
        { name: 'નિર્ણય નગર', villages: [
          { name: 'રેલ્વે લાઈન', sakhas: ['આનંદ પ્રભાત'] },
          { name: 'વિશ્વકર્મા', sakhas: ['નવસર્જન'] },
          { name: 'હરિઓમ', sakhas: ['શ્રી નાથ', 'માધવ રાત્રી'] },
          { name: 'જવાહર નગર', sakhas: ['શિવમ પ્રભાત'] },
          { name: 'ચંદ્રભાગા', sakhas: ['સાગર પ્રભાત'] },
          { name: 'બલોલનગર', sakhas: ['નવસર્જન'] },
          { name: 'રેવા નગર', sakhas: ['સ્વામીનારાયણ પ્રભાત'] },
          { name: 'નંદનવન', sakhas: ['ગુંજન પ્રભાત'] }
        ]},
        { name: 'રાણીપ', villages: [
          { name: 'ગોપાલપુરા', sakhas: ['લાલ બહાદુર'] },
          { name: 'જોગેશ્વરી', sakhas: ['અદ્વૈત પ્રભાત'] },
          { name: 'હનુમાનનગર', sakhas: ['સરદાર રાત્રી'] },
          { name: 'અયોધ્યા', sakhas: ['અદ્વૈત'] }
        ]},
        { name: 'વાડજ', villages: [
          { name: 'શાંતિનગર', sakhas: ['પંચશીલ'] },
          { name: 'ઓધાવાનગર', sakhas: ['ઓધવ નગર'] },
          { name: 'રામાપીર નો ટેકરો', sakhas: ['સ્વસ્તિક'] },
          { name: 'રબારી વસાહત', sakhas: ['સ્વસ્તિક'] },
          { name: 'હનુમાનપુરા', sakhas: ['સ્વસ્તિક'] },
          { name: 'વાસુકીનગર', sakhas: ['શિવાજી'] },
          { name: 'એમ.પી.ની ચાલી', sakhas: ['હરિહર'] },
          { name: 'ચંદ્રભાગા', sakhas: ['પંચશીલ'] },
          { name: 'જે.પી. ની ચાલી', sakhas: ['પુરુષોત્તમ'] }
        ]}
      ]
    },
    {
      name: 'મેમનગર',
      cities: [
        {
          name: 'વસ્ત્રાપુર',
          villages: [
            { name: 'ચંદુજી ની ચાલી', sakhas: ['નરસિંહ મેહતા'] },
            { name: 'રણુજા નગર - ૧', sakhas: ['રચના પ્રભાત'] },
            { name: 'રણુજા નગર - ૨', sakhas: ['સાંદીપની'] },
            { name: 'હરસિદ્ધ નગર', sakhas: ['અશ્વિની'] }
          ]
        },
        {
          name: 'મેમનગર',
          villages: [
            { name: 'વાલ્મીકી વાસ', sakhas: ['વાળીનાથ'] },
            { name: 'સુખીપુરા', sakhas: ['નારાયણ'] },
            { name: 'અજનતા ઈલોરા', sakhas: ['તરુણ નગર'] },
            { name: 'શેણાબાઈ નગર', sakhas: ['ગૌરવ પ્રભાત'] }
          ]
        },
        {
          name: 'ઘાટલોડિયા',
          villages: [
            { name: 'લક્ષ્મણ ગઢનો ટેકરો', sakhas: ['શિવાજી પ્રભાત'] },
            { name: 'મુરલીધર આવાસ', sakhas: ['સુયોધ્ય'] },
            { name: 'ગિરધાર આવાસ', sakhas: ['વર્ધમાન'] },
            { name: 'ખોડીયાર નગર', sakhas: ['પંચદેવ'] },
            { name: 'ઘાટલોડિયા ગામ', sakhas: ['મહારાણા'] },
            { name: 'ગાયત્રીનગર વસાહત', sakhas: ['સર્મપણ'] },
            { name: 'લક્ષ્મણ ગઢનો ટેકરો - ૨', sakhas: ['વિવેકાનંદ પ્રભાત'] }
          ]
        },
        {
          name: 'થલતેજ',
          villages: [
            { name: 'માલવ તળાવ', sakhas: ['તત્વતીર્થ'] },
            { name: 'નર્મદા આવાસ', sakhas: ['તત્વતીર્થ'] }
          ]
        },
        {
          name: 'શીલજ',
          villages: [
            { name: 'દેવી પૂજક', sakhas: ['કાવેરી'] },
            { name: 'રંચરડા', sakhas: [] }
          ]
        }
      ]
    },
    {
      name: 'સાબરમતી',
      cities: [
        {
          name: 'સાબરમતી',
          villages: [
            { name: 'ઈન્દિરા નગર', sakhas: ['ઈન્દિરા નગર'] },
            { name: 'રામબાગ પ્રભાત', sakhas: ['રામદેવ'] },
            { name: 'અચેર સાયં', sakhas: ['અચેર'] },
            { name: 'હરીઓમ પ્રભાત', sakhas: ['મહાકાળી ની ચાલી'] }
          ]
        },
        {
          name: 'મેટેરા',
          villages: [
            { name: 'મોટેરા ગામ', sakhas: ['શ્રીરામ'] },
            { name: 'વેલજીભાઇ નો ફૂવો', sakhas: ['કેસરી'] }
          ]
        },
        {
          name: 'કોટેશ્વર',
          villages: [
            { name: 'કોટેશ્વર', sakhas: ['કોટેશ્વર'] },
            { name: 'ભાટ', sakhas: ['સુધડ'] },
            { name: 'પાર્શ્વનાથ', sakhas: [] }
          ]
        },
        {
          name: 'ચાંદખેડા',
          villages: [
            { name: 'કેશવ', sakhas: ['સરદાર પટેલ'] },
            { name: 'અશોકા', sakhas: ['સંત રોહિદાસ'] },
            { name: 'ચાંદખેડા', sakhas: ['શિવાજી'] }
          ]
        },
        {
          name: 'ઝુંડાલ',
          villages: [
            { name: 'વિસતમાતા', sakhas: ['આંબેડકર'] },
            { name: 'ત્રાગડ ગામ', sakhas: ['તુલશી સા. મિલન'] }
          ]
        },
        {
          name: 'વિવેકાનંદ પુરમ',
          villages: [
            { name: 'વલ્લભપાર્ક', sakhas: ['હરી ઓમ'] },
            { name: 'નંદિની', sakhas: [] }
          ]
        }
      ]
    }    
  ];
  cities: any[] = [];
  villages: any[] = [];
  sakhas: string[] = [];
  addingVillage = false;
  addingSakha = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      state: [''],
      city: [''],
      village: [''],
      sakha: [''],
      newVillage: [''],
      newSakha: ['']
    });

    this.form.get('state')!.valueChanges.subscribe(selectedState => {
      this.onStateChange(selectedState);
    });

    this.form.get('city')!.valueChanges.subscribe(selectedCity => {
        this.onCityChange(selectedCity)
    });

    this.form.get('village')!.valueChanges.subscribe(selectedVillage => {
      if (selectedVillage === 'addVillage') {
        this.addingVillage = true;
      } else {
        this.addingVillage = false;
        this.onVillageChange(selectedVillage);
      }
    });

    this.form.get('sakha')!.valueChanges.subscribe(selectedSakha => {
      if (selectedSakha === 'addSakha') {
        this.addingSakha = true;
      } else {
        this.addingSakha = false;
      }
    });
  }

  onStateChange(selectedState: string) {
    const state = this.states.find(s => s.name === selectedState);
    this.cities = state ? state.cities : [];
    this.form.get('city')!.setValue('');
    this.villages = [];
    this.form.get('village')!.setValue('');
    this.sakhas = [];
    this.form.get('sakha')!.setValue('');
  }

  onCityChange(selectedCity: string) {
    const city = this.cities.find(c => c.name === selectedCity);
    this.villages = city ? city.villages : [];
    this.form.get('village')!.setValue('');
    this.sakhas = [];
    this.form.get('sakha')!.setValue('');
  }

  onVillageChange(selectedVillage: string) {
    const village = this.villages.find(v => v.name === selectedVillage);
    this.sakhas = village ? village.sakhas : [];
    this.form.get('sakha')!.setValue('');
  }


  addVillage() {
    const city = this.cities.find(c => c.name === this.form.get('city')!.value);
    const newVillage = { name: this.form.get('newVillage')!.value, sakhas: [] };
    city.villages.push(newVillage);
    this.villages = city.villages;
    this.form.get('village')!.setValue(newVillage.name);
    this.form.get('newVillage')!.setValue('');
    this.addingVillage = false;
  }

  addSakha() {
    const village = this.villages.find(v => v.name === this.form.get('village')!.value);
    const newSakha = this.form.get('newSakha')!.value;
    village.sakhas.push(newSakha);
    this.sakhas = village.sakhas;
    this.form.get('sakha')!.setValue(newSakha);
    this.form.get('newSakha')!.setValue('');
    this.addingSakha = false;
  }
  onSubmit() {
    if (this.form.valid) {
      const formData = {
        state: this.form.get('state')!.value,
        city: this.form.get('city')!.value,
        village: this.form.get('village')!.value,
        sakha: this.form.get('sakha')!.value
      };
      console.log('Form Data:', formData);
    }
  }
}
