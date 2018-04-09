import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { TokenParams } from '../token/token-params.component';
import { AuthService } from '../token/auth.service';
import { Http } from '@angular/http';

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


  travel = {
    travel_name:'',
    slogan :'', 
    description :'', 
    office_address :'', 
    province :'', 
    office_phone_number :'', 
    domain :'', 
    logo :''
  }
  

  constructor( public appService:AppService, private http:Http ) {

   }

   onSubmitTravel() {
    this.appService.postBeTravel(this.travel).subscribe(travel => {
      console.log(travel);
    })
  }


  private base64textString:String="";
  
  handleFileSelect(evt){
      let files = evt.target.files;
      let file = files[0];
    
    if (files && file) {
        let reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt) {
     let binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
            console.log( this.base64textString);
    }


  ngOnInit() {
  }

}
