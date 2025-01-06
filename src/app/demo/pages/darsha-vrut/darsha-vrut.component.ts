import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
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
  imports: [AgGridAngular, FormsModule, CommonModule,CardComponent],
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
  talukaList:any=[];
  private destroy$ = new Subject<void>();

  constructor(private apiService: ApiService, private router: Router){
  }

  ngOnInit() {
    this.rowData = [];
    this.paginationPageSize = 10;

    const columnWidth = 150; // Set the desired column width in pixels

    this.colDefs = [
      // {
      //   headerName: 'Actions',
      //   cellRenderer: (params: any) => {
      //     const button = document.createElement('button');
      //     button.innerHTML = 'View';
      //     button.addEventListener('click', () => this.viewDetails(params.data));
      //     return button;
      //   },
      //   width: columnWidth
      // },
      { field: 'createdDate', width: columnWidth },
      { field: 'reportingPerson', width: columnWidth },
      { field: 'sevaVastiName', width: columnWidth },
      { field: 'talukaName', width: columnWidth },
      { field: 'jillaName', width: columnWidth },
      { field: 'vibhagName', width: columnWidth }
     
    
      
    ];

    this.apiService.getData('api/getVibhag')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.vibhagList = res;
          console.log(this.vibhagList)
        },
        error: () => { }
      });
  }

  onGridReady(params: any) {
    console.log(params)
    // this.adjustGridHeight(params.api);
  }

  vibhagChange(e: any) {
    console.log(e.target.value);
    this.jillaList = [];
    this.selectedJilla='';

    this.apiService.getData(`api/getJilla/${e.target.value}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {

          this.jillaList = res;
        },
        error: () => { }
      });
  }

  jillaChange(e: any) {
    if (e.target.value) {
      this.selectedJilla = e.target.value;
      this.apiService.getData(`api/getTaluka/${e.target.value}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.talukaList = res;
        },
        error: () => { }
      });
    }
  }

  onSubmit() {
    const jillaIdParam = this.selectedJilla ? `?jillaId=${this.selectedJilla}` : '';
    this.apiService.getData(`api/getSevaDarshan/${this.selectedVibhag}/2025${jillaIdParam}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          if(res.length){
        this.rowData = res.map((item: any) => {
          return {
            ...item,
            jillaName: item.jilla.jillaName,
            vibhagName: item.vibhag.vibhagName,
            talukaName: item.taluka.talukaName,
            sevaVastiName: item.sevaVasti.sevaVastiName
          };
        });
        }else{
           alert('No Records Found')
        }
      },
        error: () => { }
      });
  }

  exportToCsv() {
    this.agGrid.api.exportDataAsCsv();
  }

  exportToPdf() {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [this.colDefs.map(col => col.field)],
      body: this.rowData.map(row => this.colDefs.map(col => row[col.field]))
    });
    doc.save('table.pdf');
  }

  viewDetails(data: any) {
    this.router.navigate(['/detail', data.id]);
  }
}
