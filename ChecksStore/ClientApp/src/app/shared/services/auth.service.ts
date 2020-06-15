import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import { User } from '../models/user.model';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    private url = "http://localhost:5000/api/auth/login";
   // private url = "api/auth/login";
    private isAuthenticated = false;

    checkLogin(user: User): Observable<User> {
        return this.http.post(this.url, user);        
    }

    login1(form: NgForm) {
        const credentials = JSON.stringify(form);
        return this.http.post(this.url, credentials, {
           headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
    }

    login(){
        this.isAuthenticated = true;           
    }

    logout() {
        this.isAuthenticated = false;
        localStorage.removeItem("jwt");
    }

    isLoggedIn(){
        return this.isAuthenticated;
    }
}