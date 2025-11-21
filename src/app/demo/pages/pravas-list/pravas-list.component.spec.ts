import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PravasListComponent } from './pravas-list.component';

describe('PravasListComponent', () => {
  let component: PravasListComponent;
  let fixture: ComponentFixture<PravasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PravasListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PravasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
