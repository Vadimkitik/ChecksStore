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
  user = { name: "Guest", role: "noname"};
  isLoggedIn = false;

  constructor(
    private router: Router,
    private token: TokenStorageService
    ){}

  ngOnInit() {    
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      this.user = this.token.getUser();
    }     
    console.log(this.user);    
  }

  logOut(){
    this.token.signOut();
    this.router.navigate(['/login']);

  }

}
