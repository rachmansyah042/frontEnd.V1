import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AuthService } from './token/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Travinesia';
  changeHead:boolean = true;
  changeHeadUser:boolean = false;

  constructor(public appService:AppService) {
    console.log(this.appService.getUsers());
  }

}
