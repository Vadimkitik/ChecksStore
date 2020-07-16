import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: Object = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private actRoute: ActivatedRoute
    ) { 
      let id = this.actRoute.snapshot.paramMap.get('id');
      console.log(id);      
    }

  ngOnInit() {
    console.log(this.user);
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
