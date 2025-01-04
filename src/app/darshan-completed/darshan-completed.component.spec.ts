import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshanCompletedComponent } from './darshan-completed.component';

describe('DarshanCompletedComponent', () => {
  let component: DarshanCompletedComponent;
  let fixture: ComponentFixture<DarshanCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarshanCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshanCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
