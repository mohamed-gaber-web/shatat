import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.page.html',
  styleUrls: ['./enquiry.page.scss'],
})
export class EnquiryPage implements OnInit {

  createForm: FormGroup;
  isLoading: boolean = false;

  formErrors = {
    code: '',
  };

  loginValidationMessages = {
    code: {
      required: 'Code field is required',
    }
  };

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.createForm = this.formBuilder.group({
      code: ['', Validators.compose([Validators.required])],
    });
    this.createForm.valueChanges.subscribe((data) => this.validateLoginForm());

  }

  validateLoginForm(isSubmitting = false) {
  for (const field of Object.keys(this.formErrors)) {
    this.formErrors[field] = '';

    const input = this.createForm.get(field) as FormControl;
    if (input.invalid && (input.dirty || isSubmitting)) {
      for (const error of Object.keys(input.errors)) {
        this.formErrors[field] = this.loginValidationMessages[field][
          error
        ];
      }
    }
  }
}

  getFilterSerial(value) {
    console.log(value)
    return this.http.get("https://shatat-dev02c24f0c91fac5bedevaos.cloudax.dynamics.com/Data/Sha_SerialTrans?$filter=LastInventSerialId eq '21-09-13-1002'").subscribe(response => {
      console.log(response);
    })
  }

}
