import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderMethodComponent } from './form-builder-method.component';

describe('FormBuilderMethodComponent', () => {
  let component: FormBuilderMethodComponent;
  let fixture: ComponentFixture<FormBuilderMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
