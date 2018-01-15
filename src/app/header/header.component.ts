import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from '../app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = {
    email:'',
    password:''
  }

  showLogin:boolean = false;

  rForm: FormGroup;
  post:any;
  email:string ='';
  password:string = '';
  emailAlertMessage:string ='';
  passwordAlertMessage:string ='';
  emailAtAlertMessage:string ='';


  changeHead:boolean = true;
  changeHeadUser:boolean = false;

  toggleHead():void {
   this.changeHead = !this.changeHead;
   this.changeHeadUser = !this.changeHeadUser
 }


  toggleLogin():void {
    this.showLogin = !this.showLogin;
  }
  
  constructor(private fb: FormBuilder, public appService: AppService) {


    this.initializeErrorMessage();

    this.rForm = fb.group({
      'password':[null, Validators.required],
      'email':['', Validators.required],
    });

   }

   onSubmit() {
    this.appService.addUser(this.user).subscribe(user => {
      console.log(user);
    })
   }

   initializeErrorMessage() {
    this.emailAlertMessage = "Email harus diisi";
    this.passwordAlertMessage = "Password harus diisi";
    this.emailAtAlertMessage = "Alamat email salah"
  }


   addPost (post) {
     this.email = post.email;
     this.password = post.password;
   }

  ngOnInit() {}

}
