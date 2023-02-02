import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintformposComponent } from './printformpos.component';

describe('PrintformposComponent', () => {
  let component: PrintformposComponent;
  let fixture: ComponentFixture<PrintformposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintformposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintformposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
