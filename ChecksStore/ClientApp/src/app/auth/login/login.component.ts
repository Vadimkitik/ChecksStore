import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Message } from 'src/app/shared/models/message.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;
  name: string;
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService
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
    this.authService.login1(this.form.value)
      .subscribe(response => {         
        const token = (<any>response).token;

        this.tokenStorage.saveToken(token);
        this.tokenStorage.saveUser(response);
        
        this.authService.login()
        this.name=this.tokenStorage.getUser().name;      
        this.message.text = '';
        console.log('Loggin successful');  

       this.router.navigate(['/system/bill']);                
      }, error => {
        this.showMessage({
          text:'Введен не правильный логин или пароль',
          type:'danger'
        });
      });   
  }
}
