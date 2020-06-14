import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    private url = "http://localhost:5000/api/authentification";
   // private url = "api/authentification";
    private isAuthenticated = false;

    checkLogin(user: User): Observable<User> {
        return this.http.post(this.url, user);        
    }
       
    login(){
        this.isAuthenticated = true;           
    }

    logout() {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }

    isLoggedIn(){
        return this.isAuthenticated;
    }
}