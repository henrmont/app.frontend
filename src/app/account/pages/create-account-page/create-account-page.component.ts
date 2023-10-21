import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../account.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss'],
})
export class CreateAccountPageComponent  implements OnInit {

  formulario!: FormGroup

  isPasswordChecked: boolean = false
  isEmailExists: boolean = false
  cpassword: string = ''

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      alias: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      cpassword: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.accountService.createAccount(this.formulario.value).subscribe({
        next: (response: any) => {
          console.log(response.message)
        },
        error: (error) => {
          console.log(error.message)
        },
        complete: () => {
          this.router.navigate(['/'])
          // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          // })
        }
      })
    } else {
      console.log('Formulário Inválido')
    }
  }

  checkPassword() {
    if (this.formulario.get('password')?.value == this.formulario.get('cpassword')?.value) {
      this.isPasswordChecked = true
    } else {
      this.isPasswordChecked = false
    }
  }

  checkEmail() {
    this.accountService.getValidAccount(this.formulario.get('email')?.value).subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.isEmailExists = true
        } else {
          this.isEmailExists = false
        }
      }
    })
  }

}
