import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from '../app.service';
import { TokenParams } from '../token/token-params.component';
import { Product } from '../token/product';
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

  toggleHead():void {
   this.changeHead = !this.changeHead;
   this.changeHeadUser = !this.changeHeadUser
 }


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

   onSubmit() {
    this.appService.addUser(this.user).subscribe(user => {
      // console.log(user);
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


   //token field
   tokenParams:TokenParams;
   myToken:string;
   product:Product[];

   DoLogin():void {
    this.authService.login(this.email,this.password)
    .subscribe(
      data => 
      {
        this.tokenParams = data;
        this.authService.AccessToken = this.tokenParams.token;
        this.myToken = this.authService.AccessToken;
        console.log(this.myToken);
      }

    ); 
   }

  ngOnInit() {
    this.myToken = this.authService.AccessToken;

    this.authService.auth()
      .subscribe (
        data => 
        {
          this.product = data;
        }
      )
  }

}
