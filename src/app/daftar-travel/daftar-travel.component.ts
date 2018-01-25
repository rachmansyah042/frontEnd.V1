import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daftar-travel',
  templateUrl: './daftar-travel.component.html',
  styleUrls: ['./daftar-travel.component.css']
})
export class DaftarTravelComponent implements OnInit {

  showLogin:boolean = false;

  toggleLogin():void {
    this.showLogin = !this.showLogin;
  }

  constructor() { }

  ngOnInit() {
  }

}
