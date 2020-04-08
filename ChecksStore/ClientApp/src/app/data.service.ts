import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Check } from './models/check';

@Injectable()
export class DataService {

    private url = "http://localhost:5000/api/checks";

    constructor(private http: HttpClient) {
    }

    getChecks() {
        return this.http.get(this.url);
    }

    getCheck(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createCheck(check: Check) {
        return this.http.post(this.url, check);
    }

    updateCheck(check: Check) {
        return this.http.put(this.url, check);
    }

    deleteCheck(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}