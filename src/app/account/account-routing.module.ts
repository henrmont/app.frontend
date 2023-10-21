import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { PinPageComponent } from './pages/pin-page/pin-page.component';
import { LockPageComponent } from './pages/lock-page/lock-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { LoginAccountPageComponent } from './pages/login-account-page/login-account-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginAccountPageComponent
  },
  {
    path: 'create',
    component: CreateAccountPageComponent
  },
  {
    path: 'forgot/password',
    component: ForgotPasswordPageComponent
  },
  {
    path: 'pin',
    component: PinPageComponent
  },
  {
    path: 'lock',
    component: LockPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
