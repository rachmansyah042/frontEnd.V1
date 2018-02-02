import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormControl, } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
 
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
import { FavoritUserComponent } from './favorit-user/favorit-user.component';
import { TrvSidebarComponent } from './trv-sidebar/trv-sidebar.component';
import { TrvSearchResultComponent } from './trv-search-result/trv-search-result.component';
import { TrvSearchNavbarComponent } from './trv-search-navbar/trv-search-navbar.component';
import { EtalaseTravelComponent } from './etalase-travel/etalase-travel.component';
import { DaftarTravelComponent } from './daftar-travel/daftar-travel.component';
import { JualTripComponent } from './jual-trip/jual-trip.component';
import { JualTripContentComponent } from './jual-trip-content/jual-trip-content.component';

import { routes } from './app.route';
import { AppService } from './app.service';
import { JualTripContent2Component } from './jual-trip-content2/jual-trip-content2.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';


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
    TrvSidebarComponent,
    TrvSearchResultComponent,
    TrvSearchNavbarComponent,
    EtalaseTravelComponent,
    DaftarTravelComponent,
    JualTripComponent,
    JualTripContentComponent,
    JualTripContent2Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBClUZWzmnXM-51wYSX22_lI2dBouzEDXM',
      libraries: ["places"]
    }),
    RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }),
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
