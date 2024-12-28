import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JillavrutComponent } from './jillavrut.component';

describe('JillavrutComponent', () => {
  let component: JillavrutComponent;
  let fixture: ComponentFixture<JillavrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JillavrutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JillavrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
