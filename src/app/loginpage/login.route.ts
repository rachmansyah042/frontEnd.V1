import { Routes } from '@angular/router';
import { LoginpageComponent } from "./loginpage.component";
import { FooterComponent } from '.././footer/footer.component';
import { EksternalComponent } from '.././eksternal/eksternal.component';
import { LupaKataSandiComponent } from '.././lupa-kata-sandi/lupa-kata-sandi.component';
import { UbahKataSandiComponent } from '.././ubah-kata-sandi/ubah-kata-sandi.component';


export const LoginRoutes :Routes = [
    {path:'login', component:LoginpageComponent},
    
]