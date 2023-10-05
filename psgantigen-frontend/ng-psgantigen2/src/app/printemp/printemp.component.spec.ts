import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintempComponent } from './printemp.component';

describe('PrintempComponent', () => {
  let component: PrintempComponent;
  let fixture: ComponentFixture<PrintempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
