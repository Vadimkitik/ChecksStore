import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, AbstractControl } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  constructor() {}
  

  ngOnInit() {
    
    
    this.form =new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'passwords': new FormGroup({
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'confpassword': new FormControl(null, [Validators.required])
       }, this.passwordsAreEqual()),
      'name': new FormControl(null, Validators.required),
      'telephone': new FormControl(null, [Validators.required, Validators.minLength(9), this.phoneValidator]),
      'address': new FormControl(null, Validators.required),
    });
  }
  onSubmit(){
    console.log(this.form);
  }

  private passwordsAreEqual(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      if (!(group.dirty || group.touched) || group.get('password').value === group.get('confpassword').value) {
        return null;
      }
      return {
        custom: 'Passwords are not equal.'
      };
    };
  }
  private phoneValidator(): ValidatorFn {
    const pattern: RegExp = /^[\+]?[(]?(0-9){3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
      return pattern.test(control.value) ? null : {costom: 'Invalid phone number'}
      }
    };
  }
}
