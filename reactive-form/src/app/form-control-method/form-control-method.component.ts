import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-method',
  templateUrl: './form-control-method.component.html',
  styleUrls: ['./form-control-method.component.css'],
})
export class FormControlMethodComponent implements OnInit {
  constructor() {}
  // Method 1
  // username = new FormControl('');
  // email = new FormControl();
  // password = new FormControl('');

  ngOnInit(): void {}
  myForm = new FormGroup({
    username: new FormControl('Muhammad Fahad Aleem'),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(formData: FormGroup) {
    console.log(formData.value);
  }
}
