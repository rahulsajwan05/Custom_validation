import { Component, OnInit } from '@angular/core';

import {FormBuilder , FormControl , Validator , FormGroup, Validators, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formSubmitted = false;
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.buildForm();
    // this.customValidator();
    this.setUserCategoryValidators(); 
  }
  
  buildForm() {
    this.form = this.formBuilder.group({
      email: [null],
      username: [null],
      userCategory: ['employee'],
      institution: [null],
      company: [null, [Validators.required]],
      salary: [null, [Validators.required]],
    });
    this.customValidator();
  }

  customValidator(){
          //  console.log("fd")
    const userControl= this.form.get('username');
    const emailControl= this.form.get('email');
    console.log(userControl+" "+emailControl)

    this.form.get('email').valueChanges.subscribe(email => {
      if(emailControl === null)
      {
        userControl.setValidators([Validators.required])
        // alert("Fdfsd");
        console.log("fdfdsf"); 
      }

      else {
        userControl.setValidators([Validators.required])
        // alert("Fdfsd");
        console.log("fdfdsf"); 
      }
        userControl.updateValueAndValidity();
 
    });
  }

  setUserCategoryValidators() {
    const institutionControl = this.form.get('institution');
    const companyControl = this.form.get('company');
    const salaryControl = this.form.get('salary');
    console.log(institutionControl+" "+companyControl)

    this.form.get('userCategory').valueChanges
      .subscribe(userCategory => {

        if (userCategory === 'student') {
          institutionControl.setValidators([Validators.required]);
          companyControl.setValidators(null);
          salaryControl.setValidators(null);
          console.log("d")
        }

        if (userCategory === 'employee') {
          institutionControl.setValidators(null);
          companyControl.setValidators([Validators.required]);
          salaryControl.setValidators([Validators.required]);
          console.log("f")
        }

        institutionControl.updateValueAndValidity();
        companyControl.updateValueAndValidity();
        salaryControl.updateValueAndValidity();
      });
  }

  
  

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;

    if (this.form.valid) {
      console.log(this.form.value); // Process your form
      
    }
    // console.log(this.form.get('email'))
  }
}
