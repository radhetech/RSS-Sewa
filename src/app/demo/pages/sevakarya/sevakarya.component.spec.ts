import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevakaryaComponent } from './sevakarya.component';

describe('SevakaryaComponent', () => {
  let component: SevakaryaComponent;
  let fixture: ComponentFixture<SevakaryaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevakaryaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevakaryaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
