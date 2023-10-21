import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { PinPageComponent } from './pages/pin-page/pin-page.component';
import { LockPageComponent } from './pages/lock-page/lock-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { LoginAccountPageComponent } from './pages/login-account-page/login-account-page.component';


@NgModule({
  declarations: [
    LoginAccountPageComponent,
    CreateAccountPageComponent,
    ForgotPasswordPageComponent,
    PinPageComponent,
    LockPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
