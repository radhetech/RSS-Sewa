import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevaKaryaComponent } from './seva-karya.component';

describe('SevaKaryaComponent', () => {
  let component: SevaKaryaComponent;
  let fixture: ComponentFixture<SevaKaryaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SevaKaryaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevaKaryaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
