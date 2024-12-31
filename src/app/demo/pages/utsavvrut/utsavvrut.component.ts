import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { valueSelect } from 'src/app/services/valueSelect.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-utsavvrut',
  standalone: true,
  imports: [ReactiveFormsModule,CardComponent,FormsModule,CommonModule],
  templateUrl: './utsavvrut.component.html',
  styleUrl: './utsavvrut.component.scss'
})
export class UtsavvrutComponent {
  
  rakshabandhanForm: FormGroup;
  dynamicForm: any;
  data = {};
  selectedYear:any=2024;
  isCollapsed = true;
  multiCollapsed1 = true;
  multiCollapsed2 = true;
  constructor(private fb: FormBuilder, private apiService:ApiService,private valSel:valueSelect) {
    this.rakshabandhanForm = this.fb.group({
      nagarName: [''],
      utsavCount: [''],
      totalSevaPopulation: [''],
      contactedSevaPopulation: [''],
      workersCount: [''],
      familyContacted: [''],
      rakshaOrMessageGiven: [''],
      additionalContacts: [''],
      newWorkers: [''],
      specialNotes: ['']
    });
  }
  ngOnInit(): void {
      
  }
  manageYear(event:any){
    this.rakshabandhanForm.reset();
    this.selectedYear = event.target.value;
    this.getData();
  }
  getData(){
    console.log('get call')
    // this.apiService.getData(`api/rakshabandhanVrut/676077046ea295c064d62925/${this.selectedYear}`).subscribe((res:any)=>{
    //   this.rakshabandhanForm.patchValue(res[0])
    //  })
  }
  onSubmit(e:any) {
    console.log(e.value);
    e.reset()
  }
}