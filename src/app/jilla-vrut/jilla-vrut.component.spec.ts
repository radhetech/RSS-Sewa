import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JillaVrutComponent } from './jilla-vrut.component';

describe('JillaVrutComponent', () => {
  let component: JillaVrutComponent;
  let fixture: ComponentFixture<JillaVrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JillaVrutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JillaVrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
