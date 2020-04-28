import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { LoginResponse } from '../login/interface.login.response';
import { ExtratoSaldo } from './interface.extratoSaldo';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  cliente: LoginResponse;
  extratoSaldo: ExtratoSaldo;

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
      this.cliente = JSON.parse(localStorage.getItem('cliente'));
      this.http.get(`https://apiextrato20200428095025.azurewebsites.net/api/extrato/todos/${this.cliente.ContaCorrente}`)
      .subscribe((extrato: ExtratoSaldo) => {
        this.extratoSaldo = extrato;
      });
  }
}





