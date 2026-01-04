import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-darshan-vrut-by-vasti',
  standalone: true,
  templateUrl: './darshan-vrut-by-vasti.component.html',
  styleUrl: './darshan-vrut-by-vasti.component.scss',
  imports: [CommonModule, AgGridAngular]
})
export class DarshanVrutByVastiComponent implements OnInit {
  private vibhagId: string;
  private sevaVastiId: string;
  private year: string;
  private destroy$ = new Subject<void>();

  rowData: any = [];
  showAayogyaReport = false;
  showSamajikReport = false;
  showShikshaReport = false;
  showSwavalambanReport = false;
  reportType: string;
  serialNo = 1;
  locationColDefs: ColDef[];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.year = route.snapshot.params?.['year'];
    this.vibhagId = route.snapshot.queryParams?.['vibhagId'];
    this.sevaVastiId = route.snapshot.queryParams?.['sevaVastiId'];
    const columnWidth = 130; // Set the desired column width in pixels
    this.locationColDefs = [
      { field: 'createdDate', width: columnWidth },
      { field: 'reportingPerson', width: columnWidth },
      { field: 'sevaVastiName', width: columnWidth },
      { field: 'talukaName', width: columnWidth },
      { field: 'jillaName', width: columnWidth },
      { field: 'vibhagName', width: columnWidth }
    ];
  }

  ngOnInit() {
    this.apiService
      .getData(`api/getSevaDarshan/${this.vibhagId}/${this.year}?sevaVastiId=${this.sevaVastiId}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          if (res.length) {
            this.rowData = res.map((item: any) => {
              return {
                ...item,
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

    setTimeout(() => {
      this.showAayogyaReport = this.getReportVisibility(this.rowData[this.rowData.length - 1]?.aayogya);
      this.showSamajikReport = this.getReportVisibility(this.rowData[this.rowData.length - 1]?.samajik);
      this.showShikshaReport = this.getReportVisibility(this.rowData[this.rowData.length - 1]?.shiksha);
      this.showSwavalambanReport = this.getReportVisibility(this.rowData[this.rowData.length - 1]?.swavalamban);
    }, 100);
  }

  getReportVisibility(data: object): boolean {
    let show = false;
    if (!data) {
      return false;
    }
    Object.entries(data).forEach(([key, value]) => {
      if (value['startDate']?.length > 0) {
        show = true;
      }
    });
    return show;
  }

  viewImage(url: string) {
    console.warn('Check url', url);
    Swal.fire({
      html: `<img src="${url}" class="img-fluid" style="width: 100%; height: auto; max-height: 80vh; max-width: 100%;" />`,
      padding: '0',
      confirmButtonText: 'Download',
      showCloseButton: true,
      customClass: {
        popup: 'popup-background',
        image: 'm-0',
        actions: 'm-0',
        confirmButton: 'btn btn-light',
      },
    }).then((result) => {
      if(result.isConfirmed) {
        window.open(url, '_blank');
      }
    });
  }

  getSerialNo(report: string): number {
    if(this.reportType === undefined) {
      this.reportType = report;
    }

    if(this.reportType != undefined && this.reportType != report) {
      this.reportType = report;
      this.serialNo = 1;
      return this.serialNo++;
    }
    
    return this.serialNo++;
  }
}
