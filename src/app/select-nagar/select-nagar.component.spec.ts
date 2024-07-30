import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNagarComponent } from './select-nagar.component';

describe('SelectNagarComponent', () => {
  let component: SelectNagarComponent;
  let fixture: ComponentFixture<SelectNagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectNagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectNagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
