import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakhaVrutComponent } from './sakha-vrut.component';

describe('SakhaVrttaComponent', () => {
  let component: SakhaVrutComponent;
  let fixture: ComponentFixture<SakhaVrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SakhaVrutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SakhaVrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
