import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jilla-vrut',
  templateUrl: './jilla-vrut.component.html',
  styleUrl: './jilla-vrut.component.scss'
})
export class JillaVrutComponent {
  aayamList:any = ['samajik','shiksha','swasthya','swavalamban'];
  ayamChange(e:any){
    // this.jillaForm.get('selAyam').value = e.value;
    console.log(e)
  }
  jillaForm:FormGroup;
  constructor(){
    this.jillaForm = new FormGroup({
      selAyam: new FormControl(''),
      jBethak:new FormControl(''),
      shakhaPravasNum: new FormControl(''),
      sevaVastiPravasNum: new FormControl(''),
      sevaKaryaPravasNum: new FormControl(''),
      newSevaKaryaNum: new FormControl(''),
      ayamSahNum:new FormControl('')
    })
  }
  submitJilla(form:FormGroup){
    console.log(form)
  }
}
