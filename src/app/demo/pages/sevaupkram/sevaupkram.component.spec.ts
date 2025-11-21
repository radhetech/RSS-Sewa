import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevaupkramComponent } from './sevaupkram.component';

describe('SevaupkramComponent', () => {
  let component: SevaupkramComponent;
  let fixture: ComponentFixture<SevaupkramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevaupkramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevaupkramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
