import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevadarshanComponent } from './sevadarshan.component';

describe('SevadarshanComponent', () => {
  let component: SevadarshanComponent;
  let fixture: ComponentFixture<SevadarshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevadarshanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevadarshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
