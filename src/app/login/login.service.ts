import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginRequest } from './interface.login';
import { LoginResponse } from './interface.login.response';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getLogin(login: LoginRequest): Observable<LoginResponse>{
     return this.http.post<LoginResponse>(
      'https://internet-baking-apilogin20200426164725.azurewebsites.net/api/clientes/login',
      JSON.stringify(login),
      this.httpOptions
      );
  }
}
