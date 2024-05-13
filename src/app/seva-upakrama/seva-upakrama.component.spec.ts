import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevaUpakramaComponent } from './seva-upakrama.component';

describe('SevaUpakramaComponent', () => {
  let component: SevaUpakramaComponent;
  let fixture: ComponentFixture<SevaUpakramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SevaUpakramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevaUpakramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
