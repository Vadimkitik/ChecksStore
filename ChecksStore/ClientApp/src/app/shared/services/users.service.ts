import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable()
export class UsersService {

   private url = 'http://localhost:5000/api/users';
   //private url = "api/users";
    
    constructor(private http: HttpClient) {}

    getUserByEmail(email: string) : Observable<User> {
        return this.http.get(this.url + `/${email}`);        
    }

    

    getUsers() {
        return this.http.get(this.url);
    }

    getUserById(id: number) {
        return this.http.get(this.url + '/' + id);
    }
    
    createUser(user: User) {
        return this.http.post(this.url, user);
    }

    updateUser(user: User) {
        return this.http.put(this.url, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}