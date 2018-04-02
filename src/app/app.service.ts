import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()

export class AppService {
    users:string[];

    constructor (public http:Http) {
    }

    getUsers() {
        return this.http.get('http://travinesia.com:3000/v1/user/profile')
        .map(res => res.json());
    }

    getDataTrip() {
        return this.http.get('http://travinesia.com:3000/get/trip')
        .map(res => res.json());
    }

    registerUser(newUser) {
        return this.http.post('http://travinesia.com:3000/v1/user/users', newUser)
        .map(res => res.json());
    }

    addUser(user) {
        return this.http.post('http://travinesia.com:3000/v1/user/authenticate', user)
        .map(res => res.json());
    }

} 