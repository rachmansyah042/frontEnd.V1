import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {


  profile:any =[];
  constructor(public appService: AppService) {
    this.appService.getUsers().subscribe(profile => {
        console.log(profile);
    });
   }

  ngOnInit() {
  }

}
