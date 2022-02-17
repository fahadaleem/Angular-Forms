import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-method',
  templateUrl: './form-builder-method.component.html',
  styleUrls: ['./form-builder-method.component.css'],
})
export class FormBuilderMethodComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  myForm = this.fb.group({
    username: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ],
    ],
    password: '',
  });

  ngOnInit(): void {}
  onSubmit(formData: FormGroup) {
    console.log(formData);
  }
}
