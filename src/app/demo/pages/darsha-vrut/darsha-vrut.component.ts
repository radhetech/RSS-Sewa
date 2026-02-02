import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import type { CellClickedEvent, ColDef } from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { CsvExportModule } from 'ag-grid-community';
import { PaginationModule } from 'ag-grid-community'; // Add this import
ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, PaginationModule]); // Register the module
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-darsha-vrut',
  templateUrl: './darsha-vrut.component.html',
  standalone: true,
  providers: [DatePipe],
  imports: [AgGridAngular, FormsModule, CommonModule, CardComponent],
  styleUrls: ['./darsha-vrut.component.scss']
})
export class DarshaVrutComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  rowData: any[];
  colDefs: ColDef[];
  paginationPageSize: number;
  selectedVibhag: string = '';
  selectedJilla: string = '';
  vibhagList: any = [];
  jillaList: any = [];
  talukaList: any = [];
  private destroy$ = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    const savedState = this.apiService.getDarshaVrutTableState();
 if (savedState) {
    this.rowData = savedState.rowData;
    this.selectedVibhag = savedState.selectedVibhag;
    this.vibhagChange(this.selectedVibhag);
    this.selectedJilla = savedState.selectedJilla;
     this.apiService.clearDarshaVrutTableState();
  }else{
    this.rowData = [];
  }
    this.paginationPageSize = 10;

    const columnWidth = 150; // Set the desired column width in pixels

    this.colDefs = [
    { field: 'createdDate', flex: 1, minWidth: columnWidth },
    { field: 'reportingPerson', flex: 1, minWidth: columnWidth },
    { field: 'sevaVastiName', flex: 1, minWidth: columnWidth },
    { field: 'talukaName', flex: 1, minWidth: columnWidth },
    { field: 'jillaName', flex: 1, minWidth: columnWidth },
    { field: 'vibhagName', flex: 1, minWidth: columnWidth }
    ];

    this.apiService
      .getData('api/getVibhag')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.vibhagList = res;
          console.log(this.vibhagList);
        },
        error: () => {}
      });
  }

  onGridReady(params: any) {
    this.agGrid.api.sizeColumnsToFit();
    console.log(params);
    // this.adjustGridHeight(params.api);
  }

  vibhagChange(e: any) {
    let value: string;
    if (e && e.target) {
    value = e.target.value;
    } else {
      value = e; 
    }

    console.log(value);
    this.jillaList = [];
    this.selectedJilla = '';

    this.apiService
      .getData(`api/getJilla/${value}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.jillaList = res;
        },
        error: () => {}
      });
  }

  jillaChange(e: any) {
    if (e.target.value) {
      this.selectedJilla = e.target.value;
      this.apiService
        .getData(`api/getTaluka/${e.target.value}`)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res: any) => {
            this.talukaList = res;
          },
          error: () => {}
        });
    }
  }

  onSubmit() {
    const jillaIdParam = this.selectedJilla ? `?jillaId=${this.selectedJilla}` : '';
    this.apiService
      .getData(`api/getSevaDarshan/${this.selectedVibhag}/2025${jillaIdParam}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          if (res.length) {
            this.rowData = res.map((item: any) => {
              return {
                ...item,
                createdDate: this.datePipe.transform(
                  item.createdDate,
                  'dd MMM yyyy'
                ),
                reportingPerson:item.reportingPerson,
                jillaName: item.jilla.jillaName,
                vibhagName: item.vibhag.vibhagName,
                talukaName: item.taluka.talukaName,
                sevaVastiName: item.sevaVasti.sevaVastiName
              };
            });
          } else {
            alert('No Records Found');
          }
        },
        error: () => {}
      });
  }

  exportToCsv() {
    this.agGrid.api.exportDataAsCsv();
  }

  exportToPdf() {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [this.colDefs.map((col) => col.field)],
      body: this.rowData.map((row) => this.colDefs.map((col) => row[col.field]))
    });
    doc.save('table.pdf');
  }

  viewDetails(data: any) {
    this.router.navigate(['/detail', data.id]);
  }

  onDetailReport(event: CellClickedEvent) {
    this.apiService.saveDarshaVrutTableState({
    rowData: this.rowData,
    selectedVibhag: this.selectedVibhag,
    selectedJilla: this.selectedJilla
    });

    this.router.navigate(['home', 'sevadarshan-vrut', event.data.year], {
      queryParams: {
        vibhagId: this.selectedVibhag,
        sevaVastiId: event.data.sevaVasti.sevaVastiId
      }
    });
  }
}
