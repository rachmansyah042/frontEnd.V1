import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http/src/base_request_options';
@Injectable ()

export class AppService {
    users:string[];
    headers

    constructor (public http:Http) {
    }

    
    // setHeader2() {
    //     this.headers = new Headers({
    //         'Content-Type' : 'application/json',
    //         'Authorization' : 'Bearer ' + localStorage.getItem('token')
    //     })
    // }

    createAuthorizationHeader (headers:Headers) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    getUsers() {
        let headers = new Headers();
        
        this.createAuthorizationHeader (headers);
        return this.http.get('http://travinesia.com:3000/v1/user/profile',
        {headers: headers})
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

    postBeTravel(travel) {

        let headers = new Headers();
        
        this.createAuthorizationHeader (headers);
        // console.log(headers)
        return this.http.post('http://travinesia.com:3000/v1/user/register_provider',travel,
        {headers: headers})
        .map(res => res.json());
    }

} 