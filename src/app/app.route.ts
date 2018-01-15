import { Routes } from '@angular/router';
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
import { FavoritUserComponent } from "./favorit-user/favorit-user.component";
import { TrvSidebarComponent } from "./trv-sidebar/trv-sidebar.component";
import { TrvSearchResultComponent } from "./trv-search-result/trv-search-result.component";
import { TrvSearchNavbarComponent} from "./trv-search-navbar/trv-search-navbar.component";


export const routes :Routes = [
    {path:'', component:LandingpageComponent},
    {path:'Akun', pathMatch: 'full', redirectTo: 'Akun/Profil' },
    {path:'search', component:TrvSearchResultComponent},
    {path:'searchNavbar', component:TrvSearchNavbarComponent},
    {path:'login', component:LoginpageComponent},
    {path:'Notifikasi', component:EksternalComponent},
    {path:'JadiTravel', component:EksternalComponent},
    {path:'Akun', component:TrvSidebarComponent,
children:[
    {path:'', component:PemesananComponent},
    {path:'Profil', component:EksternalComponent},
    {path:'Pemesanan', component:PemesananComponent},
    {path:'Favorit', component:FavoritUserComponent},
    {path:'Notifikasi', component:EksternalComponent},
    {path:'Promo', component:EksternalComponent}
]
}

] 