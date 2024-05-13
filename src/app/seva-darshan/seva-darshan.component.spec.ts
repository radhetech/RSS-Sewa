import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevaDarshanComponent } from './seva-darshan.component';

describe('SevaDarshanComponent', () => {
  let component: SevaDarshanComponent;
  let fixture: ComponentFixture<SevaDarshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SevaDarshanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevaDarshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
