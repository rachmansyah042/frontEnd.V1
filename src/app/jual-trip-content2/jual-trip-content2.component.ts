import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jual-trip-content2',
  templateUrl: './jual-trip-content2.component.html',
  styleUrls: ['./jual-trip-content2.component.css']
})
export class JualTripContent2Component implements OnInit {

  jual1:boolean = false;
  jual2:boolean = true;

  toggleJual():void {
    this.jual1 = !this.jual1;
    this.jual2 = !this.jual2;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
