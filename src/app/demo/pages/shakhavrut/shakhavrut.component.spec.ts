import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakhavrutComponent } from './shakhavrut.component';

describe('ShakhavrutComponent', () => {
  let component: ShakhavrutComponent;
  let fixture: ComponentFixture<ShakhavrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShakhavrutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShakhavrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
