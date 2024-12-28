import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VahivatComponent } from './vahivat.component';

describe('VahivatComponent', () => {
  let component: VahivatComponent;
  let fixture: ComponentFixture<VahivatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VahivatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VahivatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
