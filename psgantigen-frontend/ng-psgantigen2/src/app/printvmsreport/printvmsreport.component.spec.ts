import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintvmsreportComponent } from './printvmsreport.component';

describe('PrintvmsreportComponent', () => {
  let component: PrintvmsreportComponent;
  let fixture: ComponentFixture<PrintvmsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintvmsreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintvmsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
