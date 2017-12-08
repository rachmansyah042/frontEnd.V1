import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { RegisterComponent } from './register.component'
import { RoutingregisterModule} from './routingregister.module'

@NgModule({
  imports: [
    CommonModule,
    RoutingregisterModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
