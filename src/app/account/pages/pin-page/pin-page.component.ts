import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../account.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-page',
  templateUrl: './pin-page.component.html',
  styleUrls: ['./pin-page.component.scss'],
})
export class PinPageComponent  implements OnInit {

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      pin: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      cpin: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    })

    this.accountService.getAccount().subscribe({
      next: (response: any) => {
        console.log(response)
      }
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.accountService.getValidAccount(this.formulario.value).subscribe({
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
