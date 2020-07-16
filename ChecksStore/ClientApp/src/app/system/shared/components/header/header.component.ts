import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user;

  constructor(
    private router: Router,
    private token: TokenStorageService
    ) { 
       if(token.getUser() != null)
       {
        this.user = token.getUser();
       }
        console.log(this.user);
    }

  ngOnInit() {
  }

  logOut(){
    this.token.signOut();
    this.router.navigate(['/login']);

  }

}
