import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  getLogin(){
    return this.http.get('https://internet-baking-apilogin20200426164725.azurewebsites.net/api/clientes/1');
  }
}
