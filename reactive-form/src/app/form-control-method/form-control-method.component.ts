import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control-method',
  templateUrl: './form-control-method.component.html',
  styleUrls: ['./form-control-method.component.css'],
})
export class FormControlMethodComponent implements OnInit {
  constructor() {}
  // Method 1
  username = new FormControl('');
  email = new FormControl();
  password = new FormControl('');

  ngOnInit(): void {}

  onSubmit(formData: FormGroup) {
    console.log(formData);
  }
}
