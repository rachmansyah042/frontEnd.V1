import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()

export class AppService {
    users:string[];

    constructor (public http:Http) {
        this.users = ['harden', 'dadang'];
    }

    getUsers() {
        return this.users
    }

    addUser(user) {
        return this.http.post('http://travinesia.com:3000/v1/user/authenticate', user)
        .map(res => res.json());
    }

} 