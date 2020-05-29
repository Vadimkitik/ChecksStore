import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, AbstractControl } from '@angular/forms';

import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}
  

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
      'agree': new FormControl(null, Validators.required)
    });
  }
  onSubmit(){
    console.log();
    const { email, password, name, telephone, address} = this.form.value;
    const user = new User(email, this.form.value['passwords']['password'], name, telephone, address);
    console.log(user);
    this.usersService.createUser(user)
    .subscribe((user: User) => {
     console.log(user);
   })
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
