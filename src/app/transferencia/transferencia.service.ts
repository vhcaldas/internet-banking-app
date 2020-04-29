import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Transferencia } from './interface.transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getTransferencia(transferencia: Transferencia){
     return this.http.post(
      'https://apiextrato20200428095025.azurewebsites.net/api/extrato/incluir',
      JSON.stringify(transferencia),
      this.httpOptions
      );
  }
}
