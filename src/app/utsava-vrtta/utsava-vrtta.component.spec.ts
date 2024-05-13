import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtsavaVrttaComponent } from './utsava-vrtta.component';

describe('UtsavaVrttaComponent', () => {
  let component: UtsavaVrttaComponent;
  let fixture: ComponentFixture<UtsavaVrttaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtsavaVrttaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtsavaVrttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
