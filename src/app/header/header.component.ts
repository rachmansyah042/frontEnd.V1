import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogin:boolean = false;

  rForm: FormGroup;
  post:any;
  email:string ='';
  password:string = '';
  emailAlertMessage:string ='';
  passwordAlertMessage:string ='';


  toggleLogin():void {
    this.showLogin = !this.showLogin;
  }


  
  constructor(private fb: FormBuilder) {

    this.initializeErrorMessage();

    this.rForm = fb.group({
      'password':[null, Validators.required],
      'email':[null, Validators.required]

    });
   }

   initializeErrorMessage() {
    this.emailAlertMessage = "Email harus diisi";
    this.passwordAlertMessage = "Password harus diisi";
  }


   addPost (post) {
     this.email = post.email;
     this.password = post.password;
   }

  ngOnInit() {
  }

}
