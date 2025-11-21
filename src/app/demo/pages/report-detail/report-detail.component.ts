import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DetailInterface, KaryaInterface, OtherDetailInterface, ReportDetailInterface } from '../../shared/shared.interface';

@Component({
  selector: 'app-report-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-detail.component.html',
  styleUrl: './report-detail.component.scss'
})
export class ReportDetailComponent {
  isOptionSelected: boolean = false;
  isDetailedSummary: boolean = false;
  isMahanagar: boolean = false;
  isJilla: boolean = false;
  isNagar: boolean = false;
  vibhagId: string = '';
  mockData: ReportDetailInterface = {
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    mahanagar: [
        {
          name: 'Vadodara',
          sevaVastiSankhya: 10,
          karyaYuktSevaVasti: 5,
          sevaKaryaSankhya: {
            shiksha: 2,
            aarogya: 3,
            samajik: 1,
            swavalamban: 4
          },
          sevaUpkramSankhya: {
            shiksha: 1,
            aarogya: 2,
            samajik: 3,
            swavalamban: 4
          }
        },
        {
          name: 'Karnawati Pashchim',
          sevaVastiSankhya: 5,
          karyaYuktSevaVasti: 10,
          sevaKaryaSankhya: {
            shiksha: 22,
            aarogya: 31,
            samajik: 12,
            swavalamban: 43
          },
          sevaUpkramSankhya: {
            shiksha: 10,
            aarogya: 20,
            samajik: 30,
            swavalamban: 41
          }
        }
      ],
    jilla: [
        {
          name: 'Jilla 1',
          sevaVastiSankhya: 10,
          karyaYuktSevaVasti: 5,
          sevaKaryaSankhya: {
            shiksha: 2,
            aarogya: 3,
            samajik: 1,
            swavalamban: 4
          },
          sevaUpkramSankhya: {
            shiksha: 1,
            aarogya: 2,
            samajik: 3,
            swavalamban: 4
          }
        },
        {
          name: 'Jilla 2',
          sevaVastiSankhya: 5,
          karyaYuktSevaVasti: 10,
          sevaKaryaSankhya: {
            shiksha: 22,
            aarogya: 31,
            samajik: 12,
            swavalamban: 43
          },
          sevaUpkramSankhya: {
            shiksha: 10,
            aarogya: 20,
            samajik: 30,
            swavalamban: 41
          }
        }
      ],
    nagar: [
        {
          name: 'Nagar 1',
          sevaVastiSankhya: 10,
          karyaYuktSevaVasti: 5,
          sevaKaryaSankhya: {
            shiksha: 2,
            aarogya: 3,
            samajik: 1,
            swavalamban: 4
          },
          sevaUpkramSankhya: {
            shiksha: 1,
            aarogya: 2,
            samajik: 3,
            swavalamban: 4
          }
        },
        {
          name: 'Nagar 2',
          sevaVastiSankhya: 5,
          karyaYuktSevaVasti: 10,
          sevaKaryaSankhya: {
            shiksha: 22,
            aarogya: 31,
            samajik: 12,
            swavalamban: 43
          },
          sevaUpkramSankhya: {
            shiksha: 10,
            aarogya: 20,
            samajik: 30,
            swavalamban: 41
          }
        }
      ],
    other: {
        greatherThan: [
          {
            name: 'Example 1',
            gramSankhya: 100,
            sevaKaryaYuktGram: 70,
            sevaKaryaSankhya: {
              shiksha: 20,
              aarogya: 30,
              samajik: 10,
              swavalamban: 40
            },
            sevaUpkramSankhya: {
              shiksha: 11,
              aarogya: 22,
              samajik: 33,
              swavalamban: 43
            }
          },
          {
            name: 'Example 2',
            gramSankhya: 5,
            sevaKaryaYuktGram: 10,
            sevaKaryaSankhya: {
              shiksha: 22,
              aarogya: 31,
              samajik: 12,
              swavalamban: 43
            },
            sevaUpkramSankhya: {
              shiksha: 10,
              aarogya: 20,
              samajik: 30,
              swavalamban: 41
            }
          }
        ],
        lessThan: [
          {
            name: 'Example 1',
            lessThanGramSankhya: 100,
            sevaKaryaSankhya: {
              shiksha: 20,
              aarogya: 30,
              samajik: 10,
              swavalamban: 40
            },
            sevaUpkramSankhya: {
              shiksha: 11,
              aarogya: 22,
              samajik: 33,
              swavalamban: 43
            }
          },
          {
            name: 'Example 2',
            lessThanGramSankhya: 200,
            sevaKaryaSankhya: {
              shiksha: 22,
              aarogya: 31,
              samajik: 12,
              swavalamban: 43
            },
            sevaUpkramSankhya: {
              shiksha: 10,
              aarogya: 20,
              samajik: 30,
              swavalamban: 41
            }
          }
        ]
    }
  };

  constructor(private apiService: ApiService) {
    this.vibhagId = JSON.parse(localStorage.getItem('loggedInUser')).vibhag.vibhagId;
  }

  vibhagChange(e: any) {
    if (e.target.value === '') {
      this.isOptionSelected = false;
      this.isDetailedSummary = false;
    } else {
      if (e.target.value === 'other') {
        this.isDetailedSummary = true;
        this.isOptionSelected = false;
      } else {
        this.isDetailedSummary = false;
        this.isOptionSelected = true;

        if (e.target.value == 'mahanagar') {
          this.isMahanagar = true;
          this.isJilla = false;
          this.isNagar = false;
        } else if (e.target.value == 'vibhag') {
          this.isMahanagar = false;
          this.isJilla = true;
          this.isNagar = false;
        } else if (e.target.value == 'nagar') {
          this.isMahanagar = false;
          this.isJilla = false;
          this.isNagar = true;
        }
      }
    }
  }

  getReportData(): DetailInterface[] {
    if (this.isMahanagar) {
      return this.mockData.mahanagar;
    } else if (this.isJilla) {
      return this.mockData.jilla;
    } else if (this.isNagar) {
      return this.mockData.nagar;
    } else {
      return [];
    }
  }

  getTotal(data: KaryaInterface): number {
    return data.shiksha + data.aarogya + data.samajik + data.swavalamban;
  }
}
