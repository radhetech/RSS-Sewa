import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakhaVrttaComponent } from './sakha-vrtta.component';

describe('SakhaVrttaComponent', () => {
  let component: SakhaVrttaComponent;
  let fixture: ComponentFixture<SakhaVrttaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SakhaVrttaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SakhaVrttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
