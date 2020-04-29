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
      'https://internet-banking-apitransferencia.azurewebsites.net/api/transf/extrato',
      JSON.stringify(transferencia),
      this.httpOptions
      );
  }
}
