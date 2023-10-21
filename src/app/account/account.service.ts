import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './account.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(data: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/create/account`, data)
  }

  loginAccount(data: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/api/login`, data)
  }

  getValidAccount(data: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/get/valid/user`, data)
  }

  getAccount(): Observable<Account> {
    return this.http.get<Account>(`${environment.apiUrl}/api/get/user/info`)
  }
}
