import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportMonthlyShakhaVrutComponent } from './report-monthly-shakha-vrut.component';

describe('ReportMonthlyShakhaVrutComponent', () => {
  let component: ReportMonthlyShakhaVrutComponent;
  let fixture: ComponentFixture<ReportMonthlyShakhaVrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportMonthlyShakhaVrutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportMonthlyShakhaVrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
