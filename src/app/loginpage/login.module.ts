import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { LoginpageComponent } from './loginpage.component';

import { FooterComponent } from '.././footer/footer.component';
import { EksternalComponent } from '.././eksternal/eksternal.component';
import { LupaKataSandiComponent } from '.././lupa-kata-sandi/lupa-kata-sandi.component';
import { UbahKataSandiComponent } from '.././ubah-kata-sandi/ubah-kata-sandi.component';

import { LoginRoutes } from './login.route';



@NgModule({
  declarations: [
    EksternalComponent,
    FooterComponent,
    LupaKataSandiComponent,
    UbahKataSandiComponent,
    LoginpageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(LoginRoutes),
    
  ],
  providers: [],
  bootstrap: [LoginpageComponent]
})
export class AppModule { }
