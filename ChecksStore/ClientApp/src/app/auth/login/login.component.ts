import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router';

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
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.message = new Message('','');

    this.route.queryParams
      .subscribe((params: Params) => {
        if(params['nowCanLoggin']) {
          this.showMessage({
            text:'Теперь вы можете зайти в систему',
            type:'success'
          });
        }
      });

    
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 4000);
  }
  onSubmit(){
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe(response => { 
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.authService.login()
        this.router.navigate(["/"]);        
        this.message.text = '';
        console.log('Loggin successful');        
        this.router.navigate(['/']);                
      }, error => {
        this.showMessage({
          text:'Введен не правильный логин или пароль',
          type:'danger'
        });
      });   
  }
}
