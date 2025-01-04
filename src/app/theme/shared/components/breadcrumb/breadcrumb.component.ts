import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { valueSelect } from '../../../../services/valueSelect.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [ApiService],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  myList: any = {};
  vastiList: any = [];
  shakhaList: any = [];
  selectedShakha: string = '';
  vastiUrl: string = "api/getSevaVasti";
  shakhaUrl: string = "api/getShakha";
  showBreadCrumb: boolean = false;
  shakhaVrutSelected: boolean = true;
  showVasti: boolean = false;
  showShakha: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private apiService: ApiService, private valueSel: valueSelect, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.myList = JSON.parse(window.localStorage.getItem('loggedInUser')!);
    this.getVastiList();

    combineLatest([
      this.valueSel.showShakha$,
      this.valueSel.showVasti$
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([showShakha, showVasti]) => {
        console.log('showShakha:', showShakha, 'showVasti:', showVasti);
        this.showShakha = showShakha || false;
        this.cdr.detectChanges();
      });

    this.valueSel.showVasti$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.showVasti = res;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getVastiList() {
    this.apiService.getData(`${this.vastiUrl}/${this.myList.taluka.talukaId}`).subscribe({
      next: (res: any) => {
        if (res && res.length) {
          this.vastiList = res;
        }
      },
      error: () => { }
    });
    console.log(this.vastiList);
  }

  vastiChange(e: any) {
    if (e.value != 'વસ્તી') {
      this.apiService.getData(`${this.shakhaUrl}/${e.value}`).subscribe({
        next: (res: any) => {
          this.shakhaList = res;
        },
        error: () => { }
      });
      console.log(this.shakhaList);
    } else {
      this.shakhaList = [];
    }
    this.valueSel.currentVasti.next(e.value);
  }

  shakhaChange(e: any) {
    this.valueSel.getCurrentVasti().subscribe((res) => {
      console.log('current vasti', res);
    });
    if (e.value != 'શાખા') {
      this.valueSel.changeShakha(e.value);
      console.log(e.value);
    } else {
      this.valueSel.changeShakha('');
    }
  }
}