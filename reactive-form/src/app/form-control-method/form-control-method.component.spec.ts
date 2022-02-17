import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlMethodComponent } from './form-control-method.component';

describe('FormControlMethodComponent', () => {
  let component: FormControlMethodComponent;
  let fixture: ComponentFixture<FormControlMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
