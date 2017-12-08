import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup ({
    namaLengkap: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
    noTelepon: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password:new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor( private fb: FormBuilder) { 
  }

  ngOnInit() {
  }
  
  // onSubmit(){
  //   this.registerForm = this.fb.group({
  //     namaLengkap: ['', Validators.required ],
  //     noTelepon: ['', Validators.required ],
  //     email: ['', Validators.required ],
  //     password: ['', Validators.required ],
  //   });
  // }
}
