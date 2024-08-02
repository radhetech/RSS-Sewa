import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShakhaComponent } from './select-shakha.component';

describe('SelectShakhaComponent', () => {
  let component: SelectShakhaComponent;
  let fixture: ComponentFixture<SelectShakhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectShakhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectShakhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
