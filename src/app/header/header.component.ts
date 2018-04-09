import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from '../app.service';
import { TokenParams } from '../token/token-params.component';
import { AuthService } from '../token/auth.service';


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


  toggleLogin():void {
    this.showLogin = !this.showLogin;
  }
  
  constructor(private fb: FormBuilder, public appService: AppService, private authService:AuthService) {


    this.initializeErrorMessage();

    this.rForm = fb.group({
      'password':[null, Validators.required],
      'email':['', Validators.required],
    });

   }

   initializeErrorMessage() {
    this.emailAlertMessage = "Email harus diisi";
    this.passwordAlertMessage = "Password harus diisi";
    this.emailAtAlertMessage = "Alamat email salah"
  }

   onSubmit() {
  
    this.appService.addUser(this.user).subscribe(user => {
      
      localStorage.setItem("token", user.token);

      if (localStorage.token == user.token) {
        this.changeHead = !this.changeHead;
        this.changeHeadUser = !this.changeHeadUser;
      }
    })
   }

   addPost (post) {
     this.email = post.email;
     this.password = post.password;
   }

   //token field
   tokenParams:TokenParams;
   myToken:string;

  ngOnInit() {
    this.myToken = this.authService.AccessToken;

  }
}
