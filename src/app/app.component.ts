import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Travinesia';
  changeHead:boolean = false;
  changeHeadUser:boolean = true;

  constructor(public appService:AppService) {
    console.log(this.appService.getUsers());
  }

}
