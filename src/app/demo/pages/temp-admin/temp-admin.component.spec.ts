import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempAdminComponent } from './temp-admin.component';

describe('TempAdminComponent', () => {
  let component: TempAdminComponent;
  let fixture: ComponentFixture<TempAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
