import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import {
    AbstractControl,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  formData = { email: '' };
  emailControl: AbstractControl;
  form: FormGroup;

  constructor(private cdf: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.form = new FormGroup({
            emailControl: new FormControl('')
        });
        this.emailControl = this.form.controls['emailControl'];
  }
  change(e) {
    this.formData.email = e.target.value;
  }
}
