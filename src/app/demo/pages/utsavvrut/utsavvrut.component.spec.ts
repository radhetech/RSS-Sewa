import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtsavvrutComponent } from './utsavvrut.component';

describe('UtsavvrutComponent', () => {
  let component: UtsavvrutComponent;
  let fixture: ComponentFixture<UtsavvrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtsavvrutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtsavvrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
