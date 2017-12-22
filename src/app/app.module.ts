import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './header/header.component';
import { PemesananComponent } from './pemesanan/pemesanan.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { SidebarAkunProfilComponent } from './sidebar-akun-profil/sidebar-akun-profil.component';
import { FooterComponent } from './footer/footer.component';
import { EksternalComponent } from './eksternal/eksternal.component';
import { LupaKataSandiComponent } from './lupa-kata-sandi/lupa-kata-sandi.component';
import { UbahKataSandiComponent } from './ubah-kata-sandi/ubah-kata-sandi.component';
import { LoginpageComponent } from "./loginpage/loginpage.component";

import { routes } from './app.route';
import { FavoritUserComponent } from './favorit-user/favorit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    EksternalComponent,
    LandingpageComponent,
    HeaderComponent,
    PemesananComponent,
    HeaderUserComponent,
    SidebarAkunProfilComponent,
    FooterComponent,
    LupaKataSandiComponent,
    UbahKataSandiComponent,
    LoginpageComponent,
    FavoritUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
