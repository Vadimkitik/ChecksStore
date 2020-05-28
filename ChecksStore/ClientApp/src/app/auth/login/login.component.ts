import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';
import { Message } from 'src/app/shared/models/message.model';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.message = new Message('','');
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 4000);
  }
  onSubmit(){
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
      
        if(user.password === formData.password && user.email === formData.email) {
          this.message.text = '';
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login()
          console.log(user);
        } else {
          this.showMessage('Введен не правильный логин или пароль');
          }
        
      });
  }

}
