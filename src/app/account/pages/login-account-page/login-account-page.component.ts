import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../account.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-account-page',
  templateUrl: './login-account-page.component.html',
  styleUrls: ['./login-account-page.component.scss'],
})
export class LoginAccountPageComponent  implements OnInit {

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.accountService.loginAccount(this.formulario.value).subscribe({
        next: (response: any) => {
          window.localStorage.setItem('token', response.token)
          window.localStorage.setItem('refresh_token', response.refresh_token)
        },
        error: (error) => {
          console.log(error.message)
        },
        complete: () => {
          this.router.navigate(['/account/pin'])
          // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          // })
        }
      })
    } else {
      console.log('Formulário Inválido')
    }
  }

}
