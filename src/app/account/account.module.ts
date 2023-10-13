import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { IonicModule } from '@ionic/angular';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { PinPageComponent } from './pages/pin-page/pin-page.component';
import { LockPageComponent } from './pages/lock-page/lock-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    CreatePageComponent,
    ForgotPasswordPageComponent,
    PinPageComponent,
    LockPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
