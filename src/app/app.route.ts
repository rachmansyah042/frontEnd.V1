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
import { EtalaseTravelComponent} from "./etalase-travel/etalase-travel.component";
import { DaftarTravelComponent} from "./daftar-travel/daftar-travel.component";
import { JualTripComponent} from "./jual-trip/jual-trip.component";
import { JualTripContentComponent} from "./jual-trip-content/jual-trip-content.component";
import { JualTripContent2Component} from "./jual-trip-content2/jual-trip-content2.component";
import { SaldoComponent} from "./saldo/saldo.component";
import { DaftarTripComponent} from "./daftar-trip/daftar-trip.component";


export const routes :Routes = [
    {path:'', component:LandingpageComponent},
    {path:'Akun', pathMatch: 'full', redirectTo: 'Akun/Profil' },
    {path:'search', component:TrvSearchResultComponent},
    {path:'searchNavbar/:query', component:TrvSearchNavbarComponent},
    {path:'login', component:LoginpageComponent},
    {path:'Notifikasi', component:EksternalComponent},
    {path:'JadiTravel', component:DaftarTravelComponent},
    {path:'EtalaseTravel', component:EtalaseTravelComponent},
    {path:'Akun', component:TrvSidebarComponent,
children:[
    {path:'', component:PemesananComponent},
    {path:'Profil', component:EksternalComponent},
    {path:'Pemesanan', component:PemesananComponent},
    {path:'Favorit', component:FavoritUserComponent},
    {path:'Notifikasi', component:EksternalComponent},
    {path:'Promo', component:EksternalComponent}
]
},
{path:'JualTrip', component:JualTripComponent,
children:[
    {path:'', component:JualTripContentComponent},
    {path:'Saldo', component:SaldoComponent},
    {path:'JualTrip', component:JualTripContentComponent},
    {path:'TransaksiPenjualan', component:EksternalComponent},
    {path:'UbahProfilTravel', component:EksternalComponent},
    {path:'DaftarTrip', component:DaftarTripComponent}
]
}

] 
