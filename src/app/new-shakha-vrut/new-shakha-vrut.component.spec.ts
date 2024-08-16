import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShakhaVrutComponent } from './new-shakha-vrut.component';

describe('NewShakhaVrutComponent', () => {
  let component: NewShakhaVrutComponent;
  let fixture: ComponentFixture<NewShakhaVrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewShakhaVrutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewShakhaVrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
