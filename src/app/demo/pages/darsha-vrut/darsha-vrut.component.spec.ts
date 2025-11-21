import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshaVrutComponent } from './darsha-vrut.component';

describe('DarshaVrutComponent', () => {
  let component: DarshaVrutComponent;
  let fixture: ComponentFixture<DarshaVrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarshaVrutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshaVrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
